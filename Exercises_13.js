function xo(str) {
    var o = 0, x = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        x++;
       }
       if (str[i] === 'o') {
         o++;
       }
     }
    
     return x !== o ? false : true;
    }

console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))