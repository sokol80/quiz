document.addEventListener('alpine:init', () => {
  Alpine.data('quiz', () => ({
    questions: [
      {
        question: 'Какой формы будет Ваша кухня?',
        type: 'radio',

        answers: [
          { text: 'Прямая', value: 'straight', image: '/images/straight.webp' },
          { text: 'Угловая', value: 'corner', image: '/images/corner.webp' },
          {
            text: 'П-образная',
            value: 'p-shaped',
            image: '/images/u-shaped.webp',
          },
          { text: 'С островом', value: 'island', image: '/images/island.webp' },
        ],
        selectedAnswer: '',
      },
      {
        question: 'Укажите общую длину желаемой кухни (в метрах)',
        type: 'range',
        image: '/images/long_kitchen.png',
        min: 1,
        max: 15,
        step: 0.1,
        unit: 'м',
        selectedAnswer: 3,
      },
      {
        question: 'Укажите высоту кухни (в метрах)',
        type: 'range',
        image: '/images/height_kitchen.webp',
        min: 2.2,
        max: 3.5,
        step: 0.1,
        unit: 'м',
        selectedAnswer: 2.5,
      },
    ],
    currentQuestionIndex: 0,
    showResults: false,

    get progress() {
      if (this.showResults) return 100;
      return (this.currentQuestionIndex / this.questions.length) * 100;
    },

    getAnswerText(question) {
      if (question.type === 'range') {
        return `${question.selectedAnswer} ${question.unit}`;
      }
      if (question.type === 'radio') {
        const selected = question.answers.find(
          (answer) => answer.value === question.selectedAnswer
        );
        return selected ? selected.text : 'Не выбрано';
      }
      return 'Нет ответа';
    },

    nextQuestion() {
      if (!this.questions[this.currentQuestionIndex].selectedAnswer) {
        alert('Пожалуйста, выберите вариант ответа');
        return;
      }
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.showResults = true;
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    restartQuiz() {
      // Придется сбросить ответы на начальные значения
      this.questions[0].selectedAnswer = '';
      this.questions[1].selectedAnswer = 3;
      this.questions[2].selectedAnswer = 72;
      this.currentQuestionIndex = 0;
      this.showResults = false;
    },
  }));
});
