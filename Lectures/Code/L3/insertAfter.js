function insertAfter (elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

const block = document.body
const span = document.createElement('span')
const label = document.createElement('label')

block.appendChild(span)
insertAfter(label, span)
