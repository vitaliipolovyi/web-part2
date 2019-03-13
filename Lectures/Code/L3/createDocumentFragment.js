const ul = document.createElement('ul')
const fragment = document.createDocumentFragment()

const groups = ['AM31', 'AM32', 'AM33']

groups.forEach(group => {
  const li = document.createElement('li')
  li.textContent = group
  fragment.appendChild(li)
})
console.log(fragment)
ul.appendChild(fragment)
document.body.appendChild(ul)
