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
        initialValue: '', // <--- НОВОЕ ПОЛЕ
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
        initialValue: 3, // <--- НОВОЕ ПОЛЕ
      },
      {
        question: 'Укажите высоту кухни (в метрах)',
        type: 'range',
        image: '/images/height_kitchen.png',
        min: 2.2,
        max: 3.5,
        step: 0.1,
        unit: 'м',
        selectedAnswer: 2.5,
        initialValue: 2.5, // <--- НОВОЕ ПОЛЕ
      },
      // === НОВЫЙ ЧЕТВЕРТЫЙ ВОПРОС ===
      {
        question: 'Какой материал фасада предпочитаете?',
        type: 'radio',
        customClass: 'flex-4-2',
        answers: [
          { text: 'ЛДСП', value: 'ldsp', image: '/images/ldsp@2x.webp' },
          {
            text: 'МДФ в пленке ПВХ',
            value: 'mdf_pvc_film',
            image: '/images/mdf_pvc_film@2x.webp',
          },
          {
            text: 'МДФ в эмали',
            value: 'mdf_enamel',
            image: '/images/mdf_enamel@2x.webp',
          },
          {
            text: 'МДФ в пластике',
            value: 'mdf_plastic',
            image: '/images/mdf_plastic@2x.webp',
          },
          { text: 'Шпон', value: 'veneer', image: '/images/veneer@2x.webp' },
          {
            text: 'Массив дерева',
            value: 'solid_wood',
            image: '/images/solid_wood@2x.webp',
          },
        ],
        selectedAnswer: '',
        initialValue: '', // <--- НОВОЕ ПОЛЕ
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
      // Перебираем все вопросы и сбрасываем selectedAnswer на их initialValue
      this.questions.forEach((q) => {
        q.selectedAnswer = q.initialValue;
      });
      this.currentQuestionIndex = 0;
      this.showResults = false;
    },
  }));
});
