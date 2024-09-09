try {
  // begin transaction

  throw new Error('error');

  // commit transaction
} catch (e) {
  // rollback transaction

  console.log('caught "error"', e.message);
  throw e; // очікує на виконання finally
} finally {
  console.log('finally');
}
