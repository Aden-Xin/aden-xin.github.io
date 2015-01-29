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
