const quizData = [
    {
        question: "The value of tan 15° + cot 15° is:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }
        ]
    },
    {
        question: "The value of cot 5° · cot 10° · ... · cot 85° is:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "-1", correct: false },
            { text: "1/2", correct: false }
        ]
    },
    {
        question: "The domain of sin⁻¹x is:",
        answers: [
            { text: "(-π, π)", correct: false },
            { text: "(-1, 1)", correct: false },
            { text: "(-π/2, π/2)", correct: false },
            { text: "[-π/2, π/2]", correct: true }
        ]
    },
    {
        question: "If x + y + z = xyz, then the value of tan⁻¹x + tan⁻¹y + tan⁻¹z is:",
        answers: [
            { text: "π", correct: false },
            { text: "π/2", correct: true },
            { text: "π/3", correct: false },
            { text: "π/4", correct: false }
        ]
    },
    {
        question: "In △ABC, if a = 4, b = 3, and A = 60°, then C is the root of the equation:",
        answers: [
            { text: "x² + 3x + 7 = 0", correct: false },
            { text: "x² - 3x - 7 = 0", correct: false },
            { text: "x² - 3x + 7 = 0", correct: false },
            { text: "x² + 3x - 7 = 0", correct: true }
        ]
    },
    {
        question: "The value of sin A + sin B + sin C is:",
        answers: [
            { text: "S/r", correct: true },
            { text: "R/s", correct: false },
            { text: "r/S", correct: false },
            { text: "S/R", correct: false }
        ]
    },
    {
        question: "The equation sin x + cos x is:",
        answers: [
            { text: "Unique solution", correct: false },
            { text: "No solution", correct: false },
            { text: "Finite solution", correct: false },
            { text: "Infinite solution", correct: true }
        ]
    },
    {
        question: "If tan θ + tan 2θ + tan 3θ = tan θ tan 2θ tan 3θ, then the general value of θ is:",
        answers: [
            { text: "nπ + π/2", correct: false },
            { text: "nπ/6", correct: false },
            { text: "2nπ + -π/4", correct: false },
            { text: "nπ + - (-1)ⁿ π/6", correct: true }
        ]
    },
    {
        question: "A is a square matrix of order 3 and det(A) = 4, then |adj A| =:",
        answers: [
            { text: "12", correct: false },
            { text: "20", correct: false },
            { text: "8", correct: false },
            { text: "16", correct: true }
        ]
    },
    {
        question: "The sum of infinity of the series 1 + 4/5 + 7/5 + 10/5 + ... is:",
        answers: [
            { text: "16/7", correct: true },
            { text: "25/9", correct: false },
            { text: "35/16", correct: false },
            { text: "50/16", correct: false }
        ]
    },
    {
        question: "The number of committee of 5 members that can be selected from 6 men and 5 ladies consisting of 3 men and 2 ladies can be formed in:",
        answers: [
            { text: "220 ways", correct: false },
            { text: "540 ways", correct: false },
            { text: "315 ways", correct: true },
            { text: "240 ways", correct: false }
        ]
    },
    {
        question: "The sum of the series 1/2! + 1/4! + 1/6! + ... is:",
        answers: [
            { text: "e² - 1/2e", correct: true },
            { text: "(e - 1)²/2e", correct: false },
            { text: "e² - 1/2", correct: false },
            { text: "e² - 2/e", correct: false }
        ]
    },
    {
        question: "The additive inverse of z = 2 + 5i is:",
        answers: [
            { text: "(2, -5)", correct: false },
            { text: "(2, 5)", correct: false },
            { text: "(-2, -5)", correct: false },
            { text: "(-2, 5)", correct: true }
        ]
    },
    {
        question: "If 4 is a root of the equation x² - 5x + k = 0, then the value of k is:",
        answers: [
            { text: "-2", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "The number of even prime natural number is:",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "infinite", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "The range of function f(x) = |x - 1| is:",
        answers: [
            { text: "(-∞, ∞)", correct: false },
            { text: "(0, ∞)", correct: false },
            { text: "[0, ∞)", correct: true },
            { text: "(-∞, 0)", correct: false }
        ]
    },
    {
        question: "Evaluate lim_{x → 2} (8 - 3x + 12x²), if it exists:",
        answers: [
            { text: "48", correct: false },
            { text: "50", correct: false },
            { text: "52", correct: true },
            { text: "none of these", correct: false }
        ]
    },
    {
        question: "If y = √(x + √(x + √(x + ...))), then dy/dx is:",
        answers: [
            { text: "1/2y - 1", correct: true },
            { text: "√x/(2y - 1)", correct: false },
            { text: "2√x", correct: false },
            { text: "√x", correct: false }
        ]
    },
    {
        question: "∫ cot x dx is:",
        answers: [
            { text: "-csc x + c", correct: false },
            { text: "log(tan x) + c", correct: false },
            { text: "log(sec x) + c", correct: false },
            { text: "log(sin x) + c", correct: true }
        ]
    },
    {
        question: "The area of triangle determined by the vectors 3i + 4j and -5i + 7j is:",
        answers: [
            { text: "17", correct: false },
            { text: "21", correct: false },
            { text: "49.49", correct: false },
            { text: "20.5", correct: true }
        ]
    },
    {
        question: "If a + b + c = 0 then:",
        answers: [
            { text: "a × b = b × c = c × a", correct: true },
            { text: "a = b × c", correct: false },
            { text: "b = b × c", correct: false },
            { text: "a · b = b · c = c · a", correct: false }
        ]
    },
    {
        question: "The polar equation r = a cos θ represents:",
        answers: [
            { text: "Circle", correct: true },
            { text: "Parabola", correct: false },
            { text: "Hyperbola", correct: false },
            { text: "Ellipse", correct: false }
        ]
    },
    {
        question: "The value of k for which x² - 4kxy + 4y² = 0 represents a pair of coincident lines is:",
        answers: [
            { text: "k = 1", correct: true },
            { text: "k = 2", correct: false },
            { text: "k = 3", correct: false },
            { text: "k = 4", correct: false }
        ]
    },
    {
        question: "The intersection of two disjoint sets is:",
        answers: [
            { text: "A non-empty set", correct: false },
            { text: "A universal set", correct: false },
            { text: "An empty set", correct: true },
            { text: "A subset", correct: false }
        ]
    },
    {
        question: "The equation 16x² - 2y² = 1 represents:",
        answers: [
            { text: "A circle", correct: false },
            { text: "A hyperbola", correct: true },
            { text: "An ellipse", correct: false },
            { text: "A parabola", correct: false }
        ]
    },
    {
        question: "One of the plane passing through the intersection of the planes 6x + 4y + 3z = 12 and 2x + 3y + 4z = 12 is:",
        answers: [
            { text: "6x + 4y + 3z = 12", correct: false },
            { text: "4x + 3y + 2z = 12", correct: true },
            { text: "2x + 3y + 4z = 12", correct: false },
            { text: "6x + 3y + 4z = 12", correct: false }
        ]
    },
    {
        question: "The value of a for which the plane 2x - y + az = 0 is perpendicular to the plane 3x - 4y - 3z + 7 = 0 is:",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "The vertices of the triangle x + y + z = 1, 2x - y + 3z = 5 and 3x + 2y - z = 7 are:",
        answers: [
            { text: "(1, 2, 0)", correct: false },
            { text: "(2, 1, 0)", correct: false },
            { text: "(3, 1, 1)", correct: false },
            { text: "(3, 2, 1)", correct: true }
        ]
    },
    {
        question: "If P(A) = 0.3, P(B) = 0.6, P(A ∪ B) = 0.8, then P(A ∩ B) is:",
        answers: [
            { text: "0.1", correct: false },
            { text: "0.2", correct: true },
            { text: "0.3", correct: false },
            { text: "0.4", correct: false }
        ]
    },
    {
        question: "The probability that a leap year selected at random will have 53 Sundays is:",
        answers: [
            { text: "1/7", correct: false },
            { text: "2/7", correct: true },
            { text: "3/7", correct: false },
            { text: "4/7", correct: false }
        ]
    },
    {
        question: "If f(x) = x³ - 6x² + 9x + 15, then the range of f(x) is:",
        answers: [
            { text: "(0, ∞)", correct: false },
            { text: "(3, ∞)", correct: false },
            { text: "(7, ∞)", correct: false },
            { text: "(15, ∞)", correct: true }
        ]
    },
    {
        question: "The value of y = 3x² - 2x + 1 when dy/dx = 0 is:",
        answers: [
            { text: "-2", correct: false },
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "If x = a cos³θ and y = a sin³θ, then dy/dx is:",
        answers: [
            { text: "1", correct: true },
            { text: "tan θ", correct: false },
            { text: "cot θ", correct: false },
            { text: "tan θ / cot θ", correct: false }
        ]
    },
    {
        question: "The equation of the tangent to the circle x² + y² = 25 at point (3, 4) is:",
        answers: [
            { text: "3x + 4y = 25", correct: true },
            { text: "3x + 4y = 5", correct: false },
            { text: "4x + 3y = 25", correct: false },
            { text: "3x + 4y = 1", correct: false }
        ]
    },
    {
        question: "A function f(x) is said to be one-one if:",
        answers: [
            { text: "f(x) = f(y) implies x = y", correct: true },
            { text: "f(x) = f(y) implies x ≠ y", correct: false },
            { text: "f(x) ≠ f(y) implies x = y", correct: false },
            { text: "f(x) ≠ f(y) implies x ≠ y", correct: false }
        ]
    },
    {
        question: "Which of the following is not a function?",
        answers: [
            { text: "f(x) = x", correct: false },
            { text: "f(x) = √x", correct: false },
            { text: "f(x) = 1/x", correct: false },
            { text: "f(x) = ±√x", correct: true }
        ]
    },
    {
        question: "The equation y = 1/(x - 1) represents:",
        answers: [
            { text: "a circle", correct: false },
            { text: "a hyperbola", correct: true },
            { text: "a parabola", correct: false },
            { text: "a straight line", correct: false }
        ]
    },
    {
        question: "The maximum value of f(x) = 2x³ - 3x² + 12 is:",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        question: "The slope of the line passing through points (0, 2) and (3, 5) is:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "The equation of the line perpendicular to the line 3x - 4y = 7 and passing through the origin is:",
        answers: [
            { text: "4x + 3y = 0", correct: true },
            { text: "4x - 3y = 0", correct: false },
            { text: "3x + 4y = 0", correct: false },
            { text: "3x - 4y = 0", correct: false }
        ]
    },
    {
        "question": "The value of sin50° + sin 10° is:",
        "answers": [
            { "text": "1", "correct": false },
            { "text": "0", "correct": false },
            { "text": "-1", "correct": false },
            { "text": "2", "correct": true }
        ]
    }
  ,
    {
        "question": "The value of sin a + sin b + sin c in terms of area of triangle is:",
        "answers": [
            { "text": "(∆s)/(2R)", "correct": false },
            { "text": "(4∆s)/(abc)", "correct": false },
            { "text": "(4∆)/(abc)", "correct": true },
            { "text": "(4s)/(abc∆)", "correct": false }
        ]
    }
  ,
    {
        "question": "All the values of x satisfying the equation tan ax = cot bx are given by:",
        "answers": [
            { "text": "x = nπ + (a+b) π", "correct": false },
            { "text": "x = nπ - (a+b) π", "correct": false },
            { "text": "x = n π/(a+b)", "correct": true },
            { "text": "(2n+1)π/2(a+b)", "correct": false }
        ]
    }
  ,
    {
        "question": "In a triangle ABC, the value of a sin(B-C)/ (b² – c²) is:",
        "answers": [
            { "text": "2R", "correct": true },
            { "text": "1/2R", "correct": false },
            { "text": "2R²", "correct": false },
            { "text": "1/2R²", "correct": false }
        ]
    }
  ,
    {
        "question": "If (3 , 3) lies on the line joining the points (h , 0) and (0 , k) then:",
        "answers": [
            { "text": "h + k = 3", "correct": true },
            { "text": "hk=3", "correct": false },
            { "text": "3h – 3k = 1", "correct": false },
            { "text": "1/h + 1/k = 1/3", "correct": false }
        ]
    }
  ,
    {
        "question": "The equation of the straight line in double intercept form is:",
        "answers": [
            { "text": "bx + ay = ab", "correct": true },
            { "text": "y = mx + c", "correct": false },
            { "text": "y - y1 = m(x – x1)", "correct": false },
            { "text": "y - y1 = (y2 – y1)/(x2 – x1) (x – x1)", "correct": false }
        ]
    }
  ,
    {
        "question": "The circumcenter of the triangle whose vertices are (2, -1), (1, 2) and (-2, 1) is:",
        "answers": [
            { "text": "(1/2, 2/3)", "correct": false },
            { "text": "(-1/2, 3/2)", "correct": false },
            { "text": "(0, 0)", "correct": true },
            { "text": "none of the above", "correct": false }
        ]
    }
  ,
    {
        "question": "The points of intersections of the lines represented by 3x² – 7xy + 2y² + 9x + 2y -12 =0 are:",
        "answers": [
            { "text": "(2, 3)", "correct": false },
            { "text": "(3, 2)", "correct": false },
            { "text": "(-3, 2)", "correct": true },
            { "text": "(1, 2)", "correct": false }
        ]
    }
  ,
    {
        "question": "The angle between the pair of lines represented by x³ – 2xy – cot θ – y² =0 is:",
        "answers": [
            { "text": "0", "correct": false },
            { "text": "π/2", "correct": false },
            { "text": "tan⁻¹(±2)", "correct": true },
            { "text": "tan⁻¹(±1/2)", "correct": false }
        ]
    }
  ,
    {
        "question": "Which of the following is the equation of hyperbola?",
        "answers": [
            { "text": "x²/a² - y²/b² = 1", "correct": true },
            { "text": "x²/a² + y²/b² = 1", "correct": false },
            { "text": "x² - y² = 1", "correct": false },
            { "text": "x² + y² = 1", "correct": false }
        ]
    }
    // Document: Entrance_Exam_SetA.pdf
  ,
    {
        "question": "If two masses of 4kg and 16kg are moving with equal kinetic energy, the ratio of their momentum will be:",
        "answers": [
            { "text": "1:4", "correct": false },
            { "text": "1:2", "correct": true },
            { "text": "4:1", "correct": false },
            { "text": "1:√2", "correct": false }
        ]
    }
  ,
    {
        "question": "Time period for a simple pendulum inside a satellite orbiting the earth is:",
        "answers": [
            { "text": "0", "correct": true },
            { "text": "infinite", "correct": false },
            { "text": "1 sec", "correct": false },
            { "text": "9.8 sec", "correct": false }
        ]
    }
  ,
    {
        "question": "A radius of the circular path of a particle is double but its frequency of rotation remains constant. If the initial centripetal force be F, then the final centripetal force will be:",
        "answers": [
            { "text": "F", "correct": true },
            { "text": "2F", "correct": false },
            { "text": "4F", "correct": false },
            { "text": "F/2", "correct": false }
        ]
    }
  ,
    {
        "question": "A sphere is rolling. The ratio of the rotational energy to total kinetic energy is given by:",
        "answers": [
            { "text": "7:10", "correct": true },
            { "text": "2:5", "correct": false },
            { "text": "10:7", "correct": false },
            { "text": "2:7", "correct": false }
        ]
    }
  ,
    {
        "question": "If the liquid doesn’t wet the solid surface, the angle of contact is:",
        "answers": [
            { "text": "acute", "correct": false },
            { "text": "obtuse", "correct": true },
            { "text": "90°", "correct": false },
            { "text": "0", "correct": false }
        ]
    }
  ,
    {
        "question": "If a wire of Young’s modulus Y, longitudinal strain X is produced, then the value of potential energy stored in its unit volume will be:",
        "answers": [
            { "text": "YX²", "correct": false },
            { "text": "2YX²", "correct": false },
            { "text": "0.5Y²X", "correct": false },
            { "text": "0.5YX²", "correct": true }
        ]
    }
  ,
    {
        "question": "1 gm of ice at 0° and 1 gm of steam at 100° are mixed. The resulting temp. is:",
        "answers": [
            { "text": "0°C", "correct": false },
            { "text": "230°C", "correct": false },
            { "text": "50°C", "correct": false },
            { "text": "100°C", "correct": true }
        ]
    }
  ,
    {
        "question": "A black body when it is hot emits heat radiation of:",
        "answers": [
            { "text": "IR wavelength", "correct": false },
            { "text": "UV wavelength", "correct": false },
            { "text": "Particular wavelength", "correct": false },
            { "text": "All wavelengths", "correct": true }
        ]
    }
  ,
    {
        "question": "A certain mass of gas at 273K is expanded to 81 times its volume under adiabatic condition. If γ = 1.25 for the gas, then final temperature is:",
        "answers": [
            { "text": "0°C", "correct": false },
            { "text": "-91°C", "correct": false },
            { "text": "91°C", "correct": false },
            { "text": "-182°C", "correct": true }
        ]
    },
  
    {
        "question": "A particle is in simple harmonic motion with an amplitude of 4cm. At what displacement from the mean position is its energy half kinetic and half potential?",
        "answers": [
            { "text": "2cm", "correct": false },
            { "text": "1cm", "correct": false },
            { "text": "2√2 cm", "correct": false },
            { "text": "2√2 cm", "correct": true }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('time');

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    nextButton.style.display = 'none';
    timerElement.parentElement.style.display = 'block';
    showQuestion(quizData[currentQuestionIndex]);
    startTimer();
}

function showQuestion(questionData) {
    questionContainer.classList.remove('fade-in');
    void questionContainer.offsetWidth; // Trigger reflow
    questionContainer.classList.add('fade-in');
    questionContainer.innerText = "Question " + (currentQuestionIndex + 1) + ": " + questionData.question;
    answerButtons.innerHTML = '';
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    nextButton.style.display = 'block';
    clearInterval(timer);
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function startTimer() {
    timerElement.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showNextQuestion();
        }
    }, 1500);
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        timeLeft = 15;
        nextButton.style.display = 'none';
        showQuestion(quizData[currentQuestionIndex]);
        startTimer();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.innerText = `You scored ${score} out of ${quizData.length}`;
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
    timerElement.parentElement.style.display = 'none';
}

nextButton.addEventListener('click', showNextQuestion);

startQuiz();
