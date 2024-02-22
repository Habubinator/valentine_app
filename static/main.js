class Question {
    constructor(
        img,
        question,
        leftButtonText,
        rightButtonText,
        leftButtonFunction,
        rightButtonFunction
    ) {
        this.img = img;
        this.question = question;
        this.leftButtonText = leftButtonText;
        this.rightButtonText = rightButtonText;
        this.leftButtonFunction = leftButtonFunction;
        this.rightButtonFunction = rightButtonFunction;
    }
}

class Asking {
    constructor() {
        this.questions = [];
    }

    next() {
        let image = document.getElementById("mainImage");
        let question = document.getElementById("question");
        let buttonLeft = document.getElementById("buttonLeft");
        let buttonRight = document.getElementById("buttonRight");
        if (this.questions.length > 0) {
            this.questions.splice(0, 1);
            if (this.questions.length > 0) {
                const currentQuestion = this.questions[0];
                if (currentQuestion.img) {
                    image.src = currentQuestion.img;
                }
                question.textContent = currentQuestion.question;
                buttonLeft.textContent = currentQuestion.leftButtonText;
                buttonRight.textContent = currentQuestion.rightButtonText;
            }
        }
    }

    leftAnswer() {
        if (this.questions.length > 0) {
            this.questions[0].leftButtonFunction();
        }
        this.next();
    }

    rightAnswer() {
        if (this.questions.length > 0) {
            this.questions[0].rightButtonFunction();
        }
        this.next();
    }
}

let ask = new Asking();
let questions = [
    new Question( // 0
        "",
        "",
        "",
        "",
        () => {},
        () => {}
    ),
];

let initialPosition;
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");
ask.questions.push(questions[0]);
ask.questions.push(questions[1]);
ask.next();
buttonLeft.addEventListener("click", ask.leftAnswer.bind(ask));
buttonRight.addEventListener("click", ask.rightAnswer.bind(ask));
