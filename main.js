function Character(stats){
  this.type = stats.type;
  this.toughness = stats.toughness;
  this.strength = stats.strength;
  this.agility = stats.agility;
  this.intelligence = stats.intelligence;
  this.maxhp = this.toughness*3;
  this.maxmp = this.intelligence*3;
  this.name = stats.name;
}

function Battle(){
  <a href='GO.html'>Battle<a>
  <a href='No.html'>Run<a>
}

function Enemy(){
  var Enemy = new Character({name: Name, toughness: Tou, strength: Str, intelligence: Int, agility: Agi});
}

function Enemy2(){
  var Enemy2 = new Character({name: Name, toughness: Tou, strength: Str, intelligence: Int, agility: Agi});
}

function Enemy3(){
  var Enemy3 = new Character({name: Name, toughness: Tou, strength: Str, intelligence: Int, agility: Agi});
}
