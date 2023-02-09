function performCalculation (val) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('++', val)
      resolve(val)
    }, 1500)
  })
}

async function computeAll () {
  const a = await performCalculation(5)
  const b = await performCalculation(7)
  return a + b
}

computeAll()
  .then(v => {
    console.log('----')
    console.log(v)
    console.log('----')
  })
