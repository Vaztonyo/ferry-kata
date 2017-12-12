const assert = require('assert');

const Car = require('../myCar.js');
// const Ferry = require('../myFerry.js');
const Board = require('../index.js');


describe('The Car Constructor', function() {

  it('should specify the color of the car and the number of passangers in the car', function() {

    assert.equal = new Car('blue', 3);

  })
});
