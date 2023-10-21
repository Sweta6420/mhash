const originalQuestions = [
    {
        question: "What is the primary greenhouse gas responsible for global warming?",
        options: ["Carbon dioxide (CO2)", "Methane (CH4)", "Nitrous oxide (N2O)"],
        answer: "Carbon dioxide (CO2)",
    },
    {
        question: "Which of the following is a non-renewable energy source?",
        options: ["Solar power", "Wind power", "Coal"],
        answer: "Coal",
    },
    {
        question: "What does the term 'biodiversity' refer to?",
        options: ["The variety of plant species", "The variety of animal species", "The variety of life on Earth"],
        answer: "The variety of life on Earth",
    },
    {
        question: "What is the process of breaking down waste materials to turn them into reusable materials?",
        options: ["Recycling", "Composting", "Incineration"],
        answer: "Recycling",
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen (O2)", "Carbon dioxide (CO2)", "Nitrogen (N2)"],
        answer: "Carbon dioxide (CO2)",
    },
    {
        question: "Which of the following is a major cause of soil erosion?",
        options: ["Deforestation", "Planting cover crops", "Fertilization"],
        answer: "Deforestation",
    },
    {
        question: "What is the term for the gradual increase in the Earth's average temperature?",
        options: ["Global cooling", "Climate change", "Global warming"],
        answer: "Global warming",
    },
    {
        question: "Which of these is a renewable energy source generated from the Earth's internal heat?",
        options: ["Solar power", "Geothermal energy", "Nuclear power"],
        answer: "Geothermal energy",
    },
    {
        question: "What is the primary cause of ozone layer depletion?",
        options: ["Carbon emissions", "Chlorofluorocarbons (CFCs)", "Volcanic eruptions"],
        answer: "Chlorofluorocarbons (CFCs)",
    },
    {
        question: "Which gas is essential for respiration in humans?",
        options: ["Nitrogen (N2)", "Oxygen (O2)", "Carbon dioxide (CO2)"],
        answer: "Oxygen (O2)",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
    },
    {
        question: "Which of the following is a renewable source of energy derived from the sun?",
        options: ["Hydropower", "Wind power", "Solar power"],
        answer: "Solar power",
    },
{
    question: "Which gas is responsible for the unpleasant smell of rotten eggs?",
    options: ["Hydrogen (H2)", "Sulfur dioxide (SO2)", "Hydrogen sulfide (H2S)"],
    answer: "Hydrogen sulfide (H2S)",
},

];

let questions = shuffleArray([...originalQuestions]);
let currentQuestion = 0;
let score = 0;
let questionCount = 0;
let play_count = 0;
const MAX_QUESTIONS = 5;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    if (currentQuestion < questions.length && questionCount < MAX_QUESTIONS) {
        const question = questions[currentQuestion];
        questionElement.innerText = question.question;
        optionsElement.innerHTML = "";

        for (let i = 0; i < question.options.length; i++) {
            const optionButton = document.createElement("button");
            optionButton.innerText = question.options[i];
            optionButton.addEventListener("click", () => checkAnswer(i));
            optionsElement.appendChild(optionButton);
        }
        play_count+=1;
        nextButton.style.display = "none";
        nextButton.disabled = false;
        messageElement.innerText = "";
    } else if (currentQuestion < questions.length) {
        questionElement.innerText = "Do you want to continue playing?";
        optionsElement.innerHTML = "";
        messageElement.innerText = "";

        const continueButton = document.createElement("button");
        continueButton.innerText = "Continue";
        continueButton.addEventListener("click", continuePlaying);
        optionsElement.appendChild(continueButton);

        const endButton = document.createElement("button");
        endButton.innerText = "End Game";
        endButton.addEventListener("click", endGame);
        optionsElement.appendChild(endButton);
    } else {
        questionElement.innerText = `Game Over! You scored ${score} out of ${play_count}.`;
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        messageElement.innerText = "";
    }
}

function continuePlaying() {
    questionCount = 0;
    currentQuestion++;
    displayQuestion();
}

function endGame() {
    questionElement.innerText = `Game Over! You scored ${score} out of ${play_count}.`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    messageElement.innerText = "";
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];

    const optionButtons = optionsElement.getElementsByTagName("button");
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
        optionButtons[i].style.pointerEvents = "none"; // Disable pointer events
    }

    if (question.options[selectedOption] === question.answer) {
        messageElement.innerText = "Correct! You earned a point.";
        score++;
    } else {
        messageElement.innerText = `Incorrect. The correct answer is: ${question.answer}`;
    }

    questionCount++;

    if (questionCount < MAX_QUESTIONS) {
        nextButton.style.display = "block";
        nextButton.disabled = false;
    } else {
        displayQuestion();
    }
}

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

displayQuestion();