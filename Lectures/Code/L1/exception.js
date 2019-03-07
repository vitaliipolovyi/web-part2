try {
  throw new Error('error')
} catch (e) {
  console.log('caught "error"')
  throw e // очікує на виконання finally
} finally {
  console.log('finally')
}
