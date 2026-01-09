Стандартный x-transition действительно делает анимацию по вертикали. Для анимации слева направо нужно использовать кастомные классы.
Замените простой x-transition на именованные классы:
<template x-for="(question, index) in questions" :key="index">

  <div
    class="questions__question-wrapper"
    x-show="currentQuestionIndex === index"
    x-transition:enter="slide-enter"
    x-transition:enter-start="slide-enter-start"
    x-transition:enter-end="slide-enter-end"
    x-transition:leave="slide-leave"
    x-transition:leave-start="slide-leave-start"
    x-transition:leave-end="slide-leave-end"
  >
    <!-- содержимое вопроса -->
  </div>
</template>
/* Вход: элемент появляется справа и едет влево на своё место */
.slide-enter {
  transition: all 0.4s ease-out;
}
.slide-enter-start {
  opacity: 0;
  transform: translateX(100px);
}
.slide-enter-end {
  opacity: 1;
  transform: translateX(0);
}

/_ Выход: элемент уезжает влево _/
.slide-leave {
transition: all 0.3s ease-in;
position: absolute;
width: 100%;
top: 0;
left: 0;
}
.slide-leave-start {
opacity: 1;
transform: translateX(0);
}
.slide-leave-end {
opacity: 0;
transform: translateX(-100px);
}
/_ Контейнер для вопросов должен быть relative _/
.questions\_\_container > div:first-child {
position: relative;
}

/_ Или добавьте класс _/
.questions-wrapper {
position: relative;
min-height: 400px; /_ чтобы не прыгало при анимации _/
}
