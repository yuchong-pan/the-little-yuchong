let vm = new Vue({
    el: "#main",
    data: {
        speed: 50,
        pause: 300,
        bigPause: 1000,
        all: [{
            question: 'Are you Yuchong Pan?',
            answer: 'Yes. Just call me Yuchong.'
        }, {
            question: 'Where are you studying, Yuchong?',
            answer: 'The University of British Columbia.'
        }, {
            question: 'So, do you like Vancouver?',
            answer: 'Um, too much rain.'
        }],
        questions: []
    },
    mounted: function() {
        this.loadQuestions(0);
    },
    methods: {
        loadQuestions: function(i) {
            let that = this;
            if (i < that.all.length) {
                that.questions.push({ question: '', answer: '' });
                let typeAnswer = function() {
                    that.type(that.all[i].answer, 0, i, 'answer', function() {
                        that.loadQuestions(i + 1);
                    }, that.bigPause);
                };
                that.type(that.all[i].question, 0, i, 'question', typeAnswer, that.pause);
            }
        },
        type: function(text, i, kth, which, next, pause) {
            let that = this;
            if (i < text.length) {
                that.questions[kth][which] += text.charAt(i);
                setTimeout(function() {
                    that.type(text, i + 1, kth, which, next, pause);
                }, that.speed);
            } else {
                setTimeout(function() {
                    next();
                }, pause);
            }
        }
    }
});
