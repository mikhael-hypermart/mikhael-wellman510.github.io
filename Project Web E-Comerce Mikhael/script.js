//untuk menampilkan pencarian 
let pencarianTombol = document.querySelector('.pencarian-form');

document.querySelector('#pencarian-tombol').onclick = () =>{
    pencarianTombol.classList.toggle('active');
    keranjangTombol.classList.remove('active');
    loginTombol.classList.remove('active')
    navbar.classList.remove('active');
}

//untuk bagian form pembayaran
let keranjangTombol = document.querySelector('.shopping-cart');

document.querySelector('#keranjang-tombol').onclick = () =>{
    keranjangTombol.classList.toggle('active');
    pencarianTombol.classList.remove('active');
    loginTombol.classList.remove('active')
    navbar.classList.remove('active');
}

//untuk bagian Login

let loginTombol = document.querySelector('.login-form');

document.querySelector('#login-tombol').onclick = () =>{
    loginTombol.classList.toggle('active');
    pencarianTombol.classList.remove('active');
    keranjangTombol.classList.remove('active');
    navbar.classList.remove('active');
}

// icon menu dan juga untuk mengabungkan navbar ketika di perkecil
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-tombol').onclick = () =>{
    navbar.classList.toggle('active');
    pencarianTombol.classList.remove('active');
    keranjangTombol.classList.remove('active');
    loginTombol.classList.remove('active')
    
}

// 
window.onscroll = () =>{
    
    pencarianTombol.classList.remove('active');
    keranjangTombol.classList.remove('active');
    loginTombol.classList.remove('active')
    navbar.classList.remove('active');
}



// swiper JS
var swiper = new Swiper(".geser-produk", {

    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  
  
  // testimoni
  var swiper = new Swiper(".testimoni-slider", {

    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });