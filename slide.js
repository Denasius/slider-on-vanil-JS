let slideIndex = 1, // индекс слайда, т.е. тот слайд, который показывается сейчас
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'), // получаем стрелки для управления слайдами
    dotsWrap = document.querySelector('.slider-dots'), // получаем обертку всех dots для отображения активного слайда
    dots = document.getElementsByClassName('dot'); //получаем все точки под слайдером

/*
1.  ф-ция показа текущего слайда
2. ф-ция для перехода вперед и назад
3. ф-ция для определения текущего слайда
*/

// 1
function showSlides(par){
  // прописываем условия, которые будут управлять количеством слайдов на странице
  if ( par > slides.length ) {
    slideIndex = 1; // если мы доходим до последнего слайда и нажимаем кнопку next, слайдер будет возвращаться к первому слайду
  }

  if ( par < 1 ) {
    slideIndex = slides.length; // если мы находимся на первом слайде и кликаем кнопку prev, мы попадаем на последний слайд
  }

  // скрываем все слайды и показываем только тот, на который кликаем
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++){
    dots[i].classList.remove('dot-active');
  }

  // теперь показываем активный слайд и добавляем активный класс к dot'ам
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('dot-active');

}

// 2
function plusSlide (counter) {
  showSlides(slideIndex += counter);
}

function currentSlide(slide){
  showSlides(slideIndex = slide); // эту ф-цию будем использовать для получения числового индекса текущего слайда
}

// прописываем события для prev и next
prev.addEventListener('click', function () {
  plusSlide(-1) // если мы хотим нажать на кнопку prev, то вызываем вункцию plusSlide, число -1 записываеися в переменную couner
});

next.addEventListener('click', function () {
  plusSlide(1);
});

// для получения доступа к конкретному dot'у будем использовать прием делегирования
dotsWrap.addEventListener('click', function (event) {
  for ( let i = 0; i < dots.length + 1; i++ ){
    if ( event.target.classList.contains('dot') && event.target == dots[i - 1] ){
      console.log(dots[i - 1])
      currentSlide(i);
    }
  }
})

showSlides(slideIndex);
