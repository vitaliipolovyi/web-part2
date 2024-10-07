const imgGet = document.getElementById('user_avatar');
console.log(imgGet.getAttribute('src'));

const imgSet = document.getElementById('user_avatar');
// imgSet.setAttribute('src', 'avatar-999.png');
console.log(imgSet.getAttribute('src'));

// const imgDel = document.getElementById('user_avatar');
// imgDel.removetAttribute('src');

const div = document.querySelector('.user-order-abb12');
// div.getAttribute('data-user-order-id');
// div.removeAttribute('data-user-order-id');

console.log(div.dataset);
div.dataset['userOrderId'];
console.log(div.dataset['userOrderId']);
div.dataset['userOrderId'] = 'ccc123';
console.log(div.dataset['userOrderId']);
delete div.dataset['userOrderId'];
console.log(div.dataset['userOrderId']);
console.log(div.dataset);
