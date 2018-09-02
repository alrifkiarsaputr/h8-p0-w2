console.log('Soal nomor 1')
//Soal nomor 1
console.log('LOOPING PERTAMA')
var awal=2
var akhir=20

while(awal<=akhir){
if(awal%2==0){
  console.log(awal+' - I love coding')
}
awal++
}
console.log('LOOPING KEDUA')
var awal2=20
var akhir2=2

while(awal2>=akhir2){
  if(awal2%2==0){
    console.log(awal2+' - I will become fullstack developer')
  }
  awal2--
}
console.log('---')
console.log('Soal nomor 2')

//Soal nomor 2
console.log('LOOPING PERTAMA')

for(let i=1;i<21;i++
){
  console.log(i+' - I love coding')
}
console.log('LOOPING KEDUA')

for(let j=20;j>0;j--){
  console.log(j+' - I will become fullstack developer')
}
console.log('---')
console.log('Soal nomor 3')

//Soal nomor 3
for(let counter=1;counter<101;counter++){
  if(counter%2==0){
    console.log('GENAP')
  }
  else {console.log('GANJIL')}
}

//perulangan #2


var checkTwo;

checkTwo = 1;

while (checkTwo<=100) {
    console.log(' ');
    var result = checkTwo%3;
    if (result === 0) {
        console.log(checkTwo+' KELIPATAN 3');
    } else if (result !== 0){
      console.log(checkTwo+'  "" ')
    }
    checkTwo++;
}

//perulangan #3

var checkSix;

checkSix = 1;

while (checkSix<=100) {
    console.log(' ');
    var result = checkSix%6;
    if (result === 0) {
        console.log(checkSix+' KELIPATAN 6');
    } else if (result !== 0){
      console.log(checkSix+'  "" ')
    }
    checkSix++;
}

//perulangan #4

var checkTen;

checkTen = 1;

while (checkTen<=100) {
    console.log(' ');
    var result = checkTen%10;
    if (result === 0) {
        console.log(checkTen+' KELIPATAN 10');
    } else if (result !== 0){
      console.log(checkTen+'  "" ')
    }
    checkTen++;
}