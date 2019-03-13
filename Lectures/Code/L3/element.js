console.log(
document instanceof Node,
document instanceof Element,
document.firstChild,
document.firstChild instanceof Node,
document.firstChild instanceof Element,
document.firstChild.firstChild.nextElementSibling,
document.firstChild.firstChild.nextElementSibling === document.body,
document.firstChild.firstChild.nextSibling,
document.firstChild.firstChild.nextSibling instanceof Node,
document.firstChild.firstChild.nextSibling instanceof Element,
Element.prototype.__proto__ === Node.prototype
)
