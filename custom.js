const questions = [
    {
        question:'Which is largest animal in the world ?',
        answers:[
            {text:'shark' , correct: false } ,
            {text:'Blue Whale' , correct: true } ,
            {text:'Elephant' , correct: false } ,
            {text:'Giraffe' , correct: false } ,
        ]
    }, 
    {
        question:'Which is largest Desert in the world ?',
        answers:[
            {text:'Kalahari' , correct: false } ,
            {text:'Gobi' , correct: false } ,
            {text:'sahara' , correct: false } ,
            {text:'Antarctica' , correct: true } ,
        ]
    } ,
    {
        question:'Which is Smallest Continent in the world ?',
        answers:[
            {text:'Asia' , correct: false } ,
            {text:'Australia' , correct: true } ,
            {text:'Arctic' , correct: false } ,
            {text:'Africa' , correct: false } ,
        ]
    },
    {
        question:'Which is the smallest country in the world ?',
        answers:[
            {text:'vatican City' , correct: true } ,
            {text:'Bhutan' , correct: false } ,
            {text:'Nepal' , correct: false } ,
            {text:'Sri Lanka' , correct: false } ,
        ]
    },
    {
        question:'Which is the longest river in the world?',
        answers:[
            {text:'Nile' , correct: true } ,
            {text:'Amazon' , correct: false } ,
            {text:'Yangtze' , correct: false } ,
            {text:'Mississippi' , correct: false } ,
        ]
    },
    {
        question:'What is the capital city of Japan?',
        answers:[
            {text:'Beijing' , correct: false } ,
            {text:'Tokyo' , correct:true } ,
            {text:'Seoul' , correct: false } ,
            {text:'Bangkok' , correct: false } ,
        ]
    },
    {
        question:'Which planet is known as the Red Planet?',
        answers:[
            {text:'Venus' , correct: false } ,
            {text:'Mars' , correct:true } ,
            {text:'Jupiter' , correct: false } ,
            {text:'Saturn' , correct: false } ,
        ]
    },
    {
        question:' Who wrote the play "Romeo and Juliet"?',
        answers:[
            {text:'Jane Austen' , correct: false } ,
            {text:'William Shakespeare' , correct:true } ,
            {text:'Charles Dickens' , correct: false } ,
            {text:'Mark Twain' , correct: false } ,
        ]
    },
    {
        question:' In which year did the Titanic sink?',
        answers:[
            {text:'1905' , correct: false } ,
            {text:'1912' , correct:true } ,
            {text:'1931' , correct: false } ,
            {text:'1918' , correct: false } ,
        ]
    },
    {
        question:'Which is the largest ocean in the world?',
        answers:[
            {text:'Atlantic Ocean' , correct: false } ,
            {text:'Pacific Ocean' , correct:true } ,
            {text:'Indian Ocean' , correct: false } ,
            {text:'Southern Ocean' , correct: false } ,
        ]
    },
    
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0 ; 
let score = 0 ;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';  
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNO + '. ' +currentQuestion.question ;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button') ;
        button.innerHTML = answer.text ;
        button.classList.add('btn') ; 
        answerButton.appendChild(button) ; 
        if(answer.correct){
            button.dataset.correct = answer.correct ; 
        }
        button.addEventListener('click', selectAnswer)
    }); 
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target ; 
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect ){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button =>{
        if (button.dataset.correct ==='true') {
            button.classList.add('correct')
        }
        button.disabled = true ; 
    });
    showNextButton();
}

function showNextButton(){
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of 
    ${questions.length} ` ;
    nextButton.innerHTML = 'Play Again' ; 
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz() ;
