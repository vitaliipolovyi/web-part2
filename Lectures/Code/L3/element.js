console.log(
  // document instanceof Node,
  // document instanceof Element,
  // document.firstChild,
  document.body.firstChild.nextSibling instanceof Node,
  document.body.firstChild.nextSibling instanceof Element,
  // document.firstChild.firstChild?.nextElementSibling,
  // document.firstChild.firstChild?.nextElementSibling === document.body,
  // document.firstChild.firstChild?.nextSibling,
  // document.firstChild.firstChild?.nextSibling instanceof Node,
  // document.firstChild.firstChild?.nextSibling instanceof Element,
  Element.prototype.__proto__ === Node.prototype
);
console.log(document.nodeType);
console.log(document.body.firstChild.nodeType);
console.log(document.body.firstChild.nextSibling.nodeType);
