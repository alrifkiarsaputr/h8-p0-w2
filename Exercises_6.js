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
//1
for (var i = 1; i <= 100; i++) {
  if(i%2 === 0) {
      console.log('GENAP')
  }
  else {
      console.log('GANJIL')
  }
}

//2
for (var i = 1; i <= 100; i=i+2) {
  if (i%3===0) {
      console.log(i +' KELIPATAN 3')
  }
}

//3
for (var i = 1; i <=100; i=i+5) {
  if (i%6 === 0) {
      console.log(i +' KELIPATAN 6');
  }
}

//4
for (var i=1; i<=100; i=i+9) {
  if (i%10 === 0) {
      console.log(i+' KELIPATAN 10')
  }
}