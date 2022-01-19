function cutoutLine(start_pos,end_pos){
  return(
` 
  (gr_line (start ${start_pos[0]} ${start_pos[1]}) (end ${end_pos[0]} ${end_pos[1]}) (layer "Edge.Cuts") (width 0.5))`
  )
}

module.exports = {
  cutoutLine:cutoutLine,
}
