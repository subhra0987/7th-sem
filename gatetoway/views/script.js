



const submit;
const answers;

let score=0;
const showScore=document.querySelector('#showScore');

const loadQuestion=()=>{
  question.innerHTML=quizDB[questionCount].question;
  option1.innerHTML=quizDB[questionCount].a;
  option2.innerHTML=quizDB[questionCount].b;
  option3.innerHTML=quizDB[questionCount].c;
  option4.innerHTML=quizDB[questionCount].d;
};

loadQuestion();

const getCheckAnswer=()=>{
  let answer;
  answers.forEach((currAns)=>{
    if(currAns.checked){answer=currAns.id;}
  })
  return answer;
}

const deselectAll=()=>{
  answers.forEach((currAns)=> currAns.checked=False);
}

submit.addEventListener('click',()=>{
  const checkedAnswer=getCheckAnswer();
  if(checkedAnswer===quizDB[questionCount].ans){score++;}
  questionCount++;
  deselectAll();
  if(questionCount<quizDB.length){
    loadQuestion();
  }else{
    showScore.innerHTML=`
    <h3>Your Score is ${score}/${quizDB.length}</h3>
    <button class="btn2" onclick="/exam">Go Back</button>
    `;
    showScore.classList.remove('scoreArea');
  }
});

