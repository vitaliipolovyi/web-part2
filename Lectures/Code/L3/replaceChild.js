const div = document.createElement('div')
const label = document.createElement('label')

div.appendChild(label)

document.body.appendChild(div)

div.replaceChild(document.createTextNode('Node text'), label)