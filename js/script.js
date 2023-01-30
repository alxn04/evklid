var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// burger

const burgerbtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');
burgerbtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});
menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

document.querySelectorAll('.work__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.step__body').forEach(function (tabContent) {
      tabContent.classList.add('hidden');
      document.querySelector(`[data-target="${path}"`).classList.remove('hidden')
    })
  })
  tabsBtn.addEventListener('click', function (event) {
    const tabDefault = event.currentTarget.dataset.default;
    document.querySelectorAll('.work__btn').forEach(function (event) {
      event.classList.remove('work__btn_active');
      document.querySelector(`[data-path="${tabDefault}"`).classList.add('work__btn_active')
    })
})


});


