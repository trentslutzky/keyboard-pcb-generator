function square(pos){
  return(
`<rect x="${pos[0]*5}" y="${pos[1]*5}" fill="none" stroke="white" stroke-width="1" width="${18*5}" height="${17*5}"/>`
  )
}

module.exports = {
  square:square
}
