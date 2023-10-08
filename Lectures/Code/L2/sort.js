const dir = 1
function sortByField (name) {
  return function (x, y) {
    if (x[name] === y[name]) {
      return dir * (x[name] > y[name] ? 1 : -1)
    }
  }
}

function sortTreeInDepth (tree, levelLimit, level = 0) {
  let root = tree.children ? tree.children : tree

  root.sort(sortByField('name'))

  level++

  if (level < levelLimit) {
    let childrenAmount = root.length
    for (let i = 0; i < childrenAmount; ++i) {
      sortTreeInDepth(root[i], levelLimit, level)
    }
  }
}

function sortArray(data, dir = 1, sortFn = null) {
  this.sort(sortFn ? sortFn : function (x, y) {
    if (x[0] === y[0]) {
      return (x[1] > y[1] ? 1 : -1)
    } else {
      return dir * (x[0] > y[0] ? 1 : -1)
    }
  })
}
