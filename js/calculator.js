document.addEventListener('alpine:init', () => {
  Alpine.data('quiz', () => ({
    questions: [
      {
        question: 'Какой формы будет Ваша кухня?',
        answers: [
          { text: 'Прямая', value: 'straight', image: '/images/straight.webp' },
          { text: 'Угловая', value: 'corner', image: '/images/corner.webp' },
          { text: 'П-образная', value: 'p-shaped', image: '/images/u-shaped.webp' },
          { text: 'С островом', value: 'island', image: '/images/island.webp' },
        ],
        selectedAnswer: '' 
      },
      // === НОВЫЙ ВОПРОС ===
      {
        question: 'Какой размер кухни Вы планируете?',
        answers: [
          { text: 'Маленькая (до 10 м²)', value: 'small', image: '/images/small-size.webp' },
          { text: 'Средняя (10-20 м²)', value: 'medium', image: '/images/medium-size.webp' },
          { text: 'Большая (более 20 м²)', value: 'large', image: '/images/large-size.webp' },
        ],
        selectedAnswer: '' 
      }
    ],

    currentQuestionIndex: 0,
    
    // === НОВОЕ СВОЙСТВО: для отслеживания показа результатов ===
    showResults: false,

    get progress() {
      // Покажем 100% только когда результаты видны
      if (this.showResults) return 100;
      return ((this.currentQuestionIndex) / this.questions.length) * 100; // Изменил логику для более плавного прогресса
    },

    nextQuestion() {
      // Добавим валидацию: не пускать дальше, если ответ не выбран
      if (!this.questions[this.currentQuestionIndex].selectedAnswer) {
        alert('Пожалуйста, выберите вариант ответа');
        return; // Останавливаем выполнение функции
      }
      
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        // Вместо alert(), просто меняем флаг
        this.showResults = true;
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    
    // === НОВАЯ ФУНКЦИЯ: для перезапуска квиза ===
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.showResults = false;
      // Сбрасываем все выбранные ответы
      this.questions.forEach(q => {
        q.selectedAnswer = '';
      });
    }
  }));
});