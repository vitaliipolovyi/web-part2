const img = document.getElementById('user_avatar')
img.getAttribute('src')

const img = document.getElementById('user_avatar')
img.setAttribute('src', 'avatar-999.png')

const img = document.getElementById('user_avatar')
img.removetAttribute('src')

const div = document.querySelector('.user-order-abb12')
div.getAttribute('data-user-order-id')
div.removeAttribute('data-user-order-id')

div.dataset['userOrderId']
div.dataset['userOrderId'] = 'ccc123'
delete div.dataset['userOrderId']
