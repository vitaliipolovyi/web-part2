'use strict';

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

function Rectangle() {
  Shape.call(this); // map parent context
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
console.log('Is rect an instance of Shape?', rect instanceof Shape);

rect.move(5, 10);
console.dir(rect);
