import {
  square,
  line,
  svg_start,
  svg_end,
} from './assets/svg-gen/svggen'

const choc_x = 18
const choc_y = 17

export default function generate(config){

  try{
    config = JSON.parse(config)
  } catch {
    config = null
  }

  if(config == null){
    return {error:true,error_message:'invalid conifg file'}
  }

  try{
    var svg_text = ""
    svg_text += svg_start()

    const key_type = config.key_groups.main.type

    Object.entries(config.key_groups.main.columns).forEach((column,i)=>{
      key_pos = {}
      for(var key = 0;key < column[1].num_rows; key++){
        var key_center = [(i+1)*choc_x,(key+1)*choc_y]
        key_center = [key_center[0],key_center[1]+parseInt(column[1].stagger)]
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
          svg_text += line(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[i+1]))
        } else {
          svg_text += line(get_point_pos(outline[1].points[i]),get_point_pos(outline[1].points[0]))
        }
      })
    })

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

    svg_text += svg_end()
    return {error:false,error_message:null,output:svg_text}
    return(svg_text)
  } catch(error) {
    error_text = error.toString()
    return {error:true,error_message:`${error_text}`}
  }
}
