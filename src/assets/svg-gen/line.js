function line(start_pos, end_pos){
  return(
`
  <line x1="${start_pos[0]*5}" x2="${end_pos[0]*5}" y1="${start_pos[1]*5}" y2="${end_pos[1]*5}" stroke="white" stroke-width="1" sroke-linecap="round"/>
`
  )
}

module.exports = {
  line:line
}
