#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs')

// Key Types: choc
const { 
  mainpcb_start,
  mainpcb_end,
  choc,
  cutoutLine,
} = require ('./assets/pcb-gen/pcbgen')

const {
  square,
  line,
  svg_start,
  svg_end,
} = require ('./assets/svg-gen/svggen')

const argv = yargs(hideBin(process.argv))
  .option('config', {
    alias: 'c',
    type: 'string',
    description: 'path to config.json file'
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'path to output dir'
  })
  .parse()

if(argv.config == null || argv.output == null){
  console.log('Usage: generate.js -c [path/to/config file] -o [path/to/output/directory]')
  return
}

let output_dir = argv.output
let config

try{
  let config_raw = fs.readFileSync(argv.config)
  config = JSON.parse(config_raw)
} catch (error){
  if(error.code == 'ENOENT'){
    console.log('config file not found.')
    return
  }
}

if(config == null){
  console.log('Config file invalid.')
  return
}

const choc_x = 18
const choc_y = 17

function main(){
  var pcb_txt = ""
  var svg_text = ""
  svg_text += svg_start()
  pcb_txt += mainpcb_start()
  const key_type = config.key_groups.main.type
  Object.entries(config.key_groups.main.columns).forEach((column,i)=>{
    key_pos = {}
    for(var key = 0;key < column[1].num_rows; key++){
      var key_center = [(i+1)*choc_x,(key+1)*choc_y]
      key_center = [key_center[0],key_center[1]+parseInt(column[1].stagger)]
      console.log('Insert key at',key_center)
      pcb_txt += choc(key_center[0],key_center[1])
      key_pos[key] = {
        center: key_center,
        top_left: [key_center[0]-(choc_x/2),key_center[1]-(choc_y/2)],
        top_right: [key_center[0]+(choc_x/2),key_center[1]-(choc_y/2)],
        bottom_right: [key_center[0]+(choc_x/2),key_center[1]+(choc_y/2)],
        bottom_left: [key_center[0]-(choc_x/2),key_center[1]+(choc_y/2)],
      }
      svg_text += square(key_pos[key].top_left)
    }
    column[1].key_pos = key_pos
  })

  Object.entries(config.outlines).forEach((outline)=>{
    outline[1].points.forEach((_,i)=>{
      if(i+1 < outline[1].points.length){
        pcb_txt += cutoutLine(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[i+1]))
        svg_text += line(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[i+1]))
        console.log('Insert cutout line',get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[i+1]))
      } else {
        pcb_txt += cutoutLine(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[0]))
        svg_text += line(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[0]))
        console.log('Insert cutout line',get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[0]))
      }
    })
  })

  pcb_txt += mainpcb_end()

  function get_point_pos(point){
    const key_split = point.key.split('.')
    var pos = (
      config["key_groups"]
      [key_split[0]]
      ["columns"]
      [key_split[1]]
      ["key_pos"]
      [key_split[2]]
      [point.ref]
    )
    if(point.offset != null){
      pos = [pos[0]+point.offset[0],pos[1]+point.offset[1]]
    }
    return(pos)
  }

  if(output_dir[output_dir.length-1] != '/'){
    output_dir += '/'
  }

  let pcb_output_file = output_dir + 'pcb.kicad_pcb'
  fs.writeFile(pcb_output_file,pcb_txt,(err)=>{
    if(err){
      console.log(err)
    } else {
      console.log(`Wrote pcb file to ${pcb_output_file}`)
    }
  })

  svg_text += svg_end()
  let svg_output_file = output_dir + 'keys.svg'
  fs.writeFile(svg_output_file,svg_text,(err)=>{
    if(err){
      console.log(err)
    } else {
      console.log(`Wrote svg file to ${svg_output_file}`)
    }
  })
}

main()
