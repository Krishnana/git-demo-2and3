var number;
var counter = 1;

while(number !== 20) {
  number = parseInt(prompt('guess my faviurite number'));
  if(number <20) {
    alert('sorry you guess too low');
    counter++;
  } else if(number > 20){
    alert('you guessed too high');
    counter++;
  }else if(isNaN(number) || number === null){
    alert('please enter a number');
    counter++;
  }
}
