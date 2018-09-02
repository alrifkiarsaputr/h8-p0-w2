//soal 1
var rows1=5
var i=0

while(i<rows1){
  console.log('*');
  i++;
}
console.log('---')

//soal 2
var rows2=5
var i=0

while(i<rows2){
    var bintang='*'
    var j=1
    while(j<rows2){
        bintang=bintang+'*'
        j++
    }
    console.log(bintang)
    i++
}
console.log('---')

//Soal 3
var rows3=5
var i=0

while(i<rows3){
    var bintang='*'
    var j=0
    while(j<i){
        bintang=bintang+'*'
        j++
    }
    console.log(bintang)
    i++
}