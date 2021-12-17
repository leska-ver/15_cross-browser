document.addEventListener('DOMContentLoaded', function() {
 
  // burger
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('#burger').click(function() {
      $(this).toggleClass('open');
    })
  })

   // slider
  const swiper = new Swiper('.swiper-container', {
    speed: 3000, //Интервал времени

    autoplay: {
       delay: 5000, //Интервал ожидания
       disableOnInteraction: false,
     },

    // If we need pagination(Разбивка на страницы)
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
     },
  
    // Navigation arrows(Стрелки навигации) На будущее
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar(Полоса прокрутки)
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    effect: 'Fade',
  });
  
  //Инициализация Swipe
  new Swiper('.image-slider', {
    // Стрелки навигация
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
  }, 
}),
  
  // Аккордеон
  $("#accordion").accordion({
    heightStyle: "content"
  });
  
  // Табы
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {

      // event.preventDefault();//Отменяем клик ссылке

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })    
  })
})