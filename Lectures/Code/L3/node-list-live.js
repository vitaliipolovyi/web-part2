const divs = document.getElementsByTagName('div');
console.log(divs);
Array.prototype.forEach.call(divs, function (el) {
  console.log(el);
});
