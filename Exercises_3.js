function baliKata(kata){
  var kataDalam=''
  for(let i=kata.length-1;i>=0;i--){
    kataDalam=kataDalam+kata[i]
  }
  return kataDalam
}

console.log(balikKata('coba'))