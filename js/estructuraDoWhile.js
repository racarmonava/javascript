var counter = 0;
const rain = ()=> Math.random() < 0.25;

do{
    counter ++;

}while (!rain());

var veces = (counter> 1?"veces":"vez");

console.log(`fui a ver si llovia ${counter} ${veces}`);
