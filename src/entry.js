export default function Entry (title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(){
  let bodyArray = this.body.split(" ");
  return bodyArray.length;
}

Entry.prototype.getVowels = function(){
  const vowelCount = this.body.replace(/[^aeiou]/gi, "");
  return vowelCount.length;
}

Entry.prototype.getConsonants = function(){
  const consonantCount = this.body.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, "");
  //console.log(consonantCount.replace(/[aeiou]|\W/gi,'').length);
  return consonantCount.length;
  //    
}
//   body.replace(/[^aeiou]/gi, "") 
//  asdfasdfgg..123
//  aa 

Entry.prototype.getTeaser = function(){
  let bodyArray = this.body.split(" ");
  let teaser = [];
  for(let i=0; i < 8; i++){
    console.log(bodyArray[i].includes("."));
    if(bodyArray[i].includes(".")){
      teaser.push(bodyArray[i]);
      break;
    }
    teaser.push(bodyArray[i]);
  }
  return teaser.join(" ");
}