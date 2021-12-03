let kuNasiibi = false;
var lambar = 46;
var nasiibi = prompt(`ku nasiibi lambar 0 - 100 !`);

if (+nasiibi === lambar){
  kuNasiibi = true;
}

if(kuNasiibi === true){
  document.querySelector('main').innerHTML = `libax yaa kuu shegay inay jawabtu tahay ${lambar}`;
}else{
  document.querySelector('main').innerHTML = `ax miskiin waad garan waydey! 😂 refresh garee page ka oo iskuday mar kale 😈`;
}
















//
//if () {
//  console.log('The condition is true.');
//} else {
//  console.log('The condition is false.');
//}
