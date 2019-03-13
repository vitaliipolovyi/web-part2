const block = document.body
const span = document.createElement('span')
const label = document.createElement('label')

block.appendChild(span)
block.insertBefore(label, span)
