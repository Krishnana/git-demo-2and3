var stuff = ['pencils','costs','car','book','turtle'];
var answer = prompt('what is one of my fav things?');
var flag = 0;

for(var i=0; i <stuff.length; i++){
  if(answer === stuff[i]){
    alert('that\'s the correct thing');
    flag = 1;
  }
}

if(flag===0){
  alert('you didn\'t find the right 1');
}
