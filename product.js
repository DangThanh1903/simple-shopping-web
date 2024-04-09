// đổi state cho 3 button trong thẻ header
const buttons1 = document.querySelectorAll('.cn-disabled, .cn-able');
buttons1.forEach(button => {
  button.addEventListener('click', handleClick1);
});

function handleClick1() {
  const current = this;
  document.querySelector('.cn-able').classList.remove('cn-able');
  current.classList.add('cn-able');
  current.classList.remove('cn-disabled');
  buttons1.forEach(button => {
    if (button !== current) {
      button.classList.add('cn-disabled');
    }
  });

}


// hiện thị thẻ cart
let theCart = document.querySelector('#the-cart');
const cartAct = document.getElementById('cart-svg');

const blacks = document.getElementById('shadow');

function openCart() {
  an_the();
  theCart.style.zIndex = 10;
  cartAct.classList.add('svg-active');
  blacks.style.zIndex = 9;
  blacks.style.backgroundColor = 'rgba(45, 45, 45, 0.10)';
}

let theLogin = document.querySelector('#the-login');
const profileAct = document.getElementById('profile-svg');

function openLogin() {
  an_the();
  theLogin.style.zIndex = 10;
  profileAct.classList.add('svg-active');
  blacks.style.zIndex = 9;
  blacks.style.backgroundColor = 'rgba(45, 45, 45, 0.10)';
}

let theSignUp = document.querySelector('#the-signup');

function openSignUp() {
  an_the();
  theSignUp.style.zIndex = 10;
  profileAct.classList.add('svg-active');
  blacks.style.zIndex = 9;
  blacks.style.backgroundColor = 'rgba(45, 45, 45, 0.10)';
}

let theProfile = document.querySelector('#the-profile');

function openProfile(){
  an_the();
  theProfile.style.zIndex = 10;
  profileAct.classList.add('svg-active');
  blacks.style.zIndex = 9;
  blacks.style.backgroundColor = 'rgba(45, 45, 45, 0.10)';
}

let theOrder = document.querySelector('#the-order');
const orderAct = document.getElementById('order-svg');

function openOrder(){
  an_the();
  theOrder.style.zIndex = 10;
  orderAct.classList.add('svg-active');
  blacks.style.zIndex = 9;
  blacks.style.backgroundColor = 'rgba(45, 45, 45, 0.10)';
}

function an_the(){
  theCart.style.zIndex = -99;
  theLogin.style.zIndex = -99;
  theSignUp.style.zIndex = -99;
  theProfile.style.zIndex = -99;
  theOrder.style.zIndex = -99;
  blacks.style.zIndex = -50;
  blacks.style.backgroundColor = 'white';
  cartAct.classList.remove('svg-active');
  profileAct.classList.remove('svg-active');
  orderAct.classList.remove('svg-active')
}

const buttonsSize = document.querySelectorAll('.product-2-5 button');

let isClicked = false;

buttonsSize.forEach(button => {
  button.addEventListener('click', () => {

    if(!isClicked) {
      // Thêm CSS mới khi chưa được click
      button.classList.add('active');
      isClicked = true; 
    } else {
      // Bỏ CSS mới và trả về ban đầu khi đã được click
      button.classList.remove('active');
      isClicked = false;
    }

  });
});
const buttonsColor = document.querySelectorAll('.product-2-9 button');

buttonsColor.forEach(button => {
  button.addEventListener('click', () => {

    if(!isClicked) {
      // Thêm CSS mới khi chưa được click
      button.classList.add('active');
      isClicked = true; 
    } else {
      // Bỏ CSS mới và trả về ban đầu khi đã được click
      button.classList.remove('active');
      isClicked = false;
    }

  });
});
