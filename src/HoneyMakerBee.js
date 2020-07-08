var HoneyMakerBee = function() {
  // call the Bee superclass
  Bee.call(this);
  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to make honey
  this.job = 'make honey';
  // a honeyPot property that is set to 0
  this.honeyPot = 0;

  /* a color property inherited from bee that is set to yellow
   * a food property that is inherited from grub */
};

// set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

/* an eat method that is inherited from grub */