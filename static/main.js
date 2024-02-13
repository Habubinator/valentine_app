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
    new Question( // 1
        "img/main.png",
        "Ти ж знаєш, що завтра день святого Валентина?",
        "ТААААК",
        "Хто такий Валентин?",
        () => {
            ask.questions.push(questions[2]);
        },
        () => {
            ask.questions.push(questions[3]);
        }
    ),
    new Question( // 2
        "img/3.gif",
        "Ти будеш моєю Валентинкою?",
        "ТАК",
        "нє",
        () => {
            if (initialPosition != null) {
                buttonRight.style.position = "";
                buttonRight.style.left = initialPosition.left;
                buttonRight.style.top = initialPosition.top;
            }
            ask.questions.push(questions[5]);
        },
        () => {
            initialPosition = {
                left: buttonRight.style.left,
                top: buttonRight.style.top,
            };
            ask.questions.push(questions[4]);
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;

            // Генерируем случайные координаты для кнопки
            let randomX = Math.floor(
                Math.random() * (windowWidth - buttonRight.offsetWidth)
            );
            let randomY = Math.floor(
                Math.random() * (windowHeight - buttonRight.offsetHeight)
            );

            // Устанавливаем новые координаты кнопки
            buttonRight.style.position = "absolute";
            buttonRight.style.left = randomX + "px";
            buttonRight.style.top = randomY + "px";
        }
    ),
    new Question( // 3
        "img/6.gif",
        "Це день усіх закоханих, як ти могла забути?",
        "Я і не забула",
        "Спасибі що сказав!",
        () => {
            ask.questions.push(questions[2]);
        },
        () => {
            ask.questions.push(questions[2]);
        }
    ),
    new Question( // 4
        "img/4.png",
        "Ти будеш моєю Валентинкою?",
        "ТАК",
        "нє",
        () => {
            if (initialPosition != null) {
                buttonRight.style.position = "";
                buttonRight.style.left = initialPosition.left;
                buttonRight.style.top = initialPosition.top;
            }
            ask.questions.push(questions[5]);
        },
        () => {
            ask.questions.push(questions[4]);
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;

            // Генерируем случайные координаты для кнопки
            let randomX = Math.floor(
                Math.random() * (windowWidth - buttonRight.offsetWidth)
            );
            let randomY = Math.floor(
                Math.random() * (windowHeight - buttonRight.offsetHeight)
            );

            // Устанавливаем новые координаты кнопки
            buttonRight.style.position = "absolute";
            buttonRight.style.left = randomX + "px";
            buttonRight.style.top = randomY + "px";
        }
    ),
    new Question( // 5
        "img/5.gif",
        "Урааа, а тепер дуже і дуже важливий вибір!",
        "Який?",
        "Який?",
        () => {
            ask.questions.push(questions[6]);
        },
        () => {
            ask.questions.push(questions[6]);
        }
    ),
    new Question( // 6
        null,
        "Чи ти підеш зі мною після волонтерства прогулятись по Одесі, зайдемо в ЧІНЧІН, попити кави і пройдемось там де ще не ходили?",
        "ТАК",
        "ТАК",
        () => {
            ask.questions.push(questions[7]);
        },
        () => {
            ask.questions.push(questions[7]);
        }
    ),
    new Question( // 7
        "img/2.gif",
        "А тепер скажи мені це в приватних повідомленнях (я не встиг реалізувати логіку серверу)",
        "Хехе",
        "Хохо",
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
