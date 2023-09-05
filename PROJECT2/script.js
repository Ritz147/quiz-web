const questions=[{
question:"What does HTML stand for?",
answer:[
    {text:"Home Tool Markup Language",correct:"false"},
    {text:"Hyper Text Markup Language ",correct:"true"},
    {text:"Hyperlinks Text Markup Language",correct:"false"},
    {text:"Hyperlinks and Text Markup Language",correct:"false"},

]
},
{
question:"What does CSS stand for?",
answer:[
    {text:"Creative Style Sheets",correct:"false"},
    {text:"Compact Style Sheets ",correct:"false"},
    {text:"Cascading Style Sheets",correct:"true"},
    {text:"Creative Simple Sheets",correct:"false"},

]
},
{
    question:"Choose the correct HTML element to define important text",
    answer:[
        {text:"<i>",correct:"false"},
        {text:"<strong>",correct:"true"},
        {text:"<b>",correct:"false"},
        {text:"<important>",correct:"false"},
    
    ] 
},
{
    question:"The item present within the angled brackets in an HTML tag is",
    answer:[
        {text:" identifier",correct:"false"},
        {text:"data",correct:"false"},
        {text:"tags",correct:"true"},
        {text:"text",correct:"false"},
    
    ]  
},
{
    question:"When the mouse is clicked on a link, it is called as",
    answer:[
        {text:"a default link",correct:"false"},
        {text:"an active link",correct:"true"},
        {text:" a link",correct:"false"},
        {text:"an event",correct:"false"},
    
    ]   
},
{
    question:"Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    answer:[
        {text:"HTML",correct:"false"},
        {text:"PHP",correct:"false"},
        {text:"CSS",correct:"true"},
        {text:"Ajax",correct:"false"},
    
    ] 
},
{
    question:"Which of the following CSS framework is used to create a responsive design?",
    answer:[
        {text:"django",correct:"false"},
        {text:"rails",correct:"false"},
        {text:"larawell",correct:"false"},
        {text:"bootstrap",correct:"true"},
    
    ] 
},
{
    question:"Which of the following CSS property sets what kind of line decorations are added to an element, such as underlines, overlines, etc?",
    answer:[
        {text:"text-decoration",correct:"false"},
        {text:"text-style",correct:"false"},
        {text:"text-decoration-line",correct:"true"},
        {text:"text-line",correct:"false"},
    
    ] 
},{
    question:"Which of the following CSS property is used to make the text bold?",
    answer:[
        {text:"text-decoration:bold",correct:"false"},
        {text:"font-weight: bold",correct:"true"},
        {text:"font-style: bold",correct:"false"},
        {text:"text-align: bold",correct:"false"},
    
    ]   
},
{
    question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answer:[
        {text:"Position",correct:"false"},
        {text:"Window",correct:"true"},
        {text:"Standard",correct:"false"},
        {text:"Location",correct:"false"},
    
    ]     
},
{
    question:"What is the basic difference between JavaScript and Java?",
    answer:[
        {text:"Functions are considered as fields",correct:"false"},
        {text:"Functions are values, and there is no hard distinction between methods and fields",correct:"true"},
        {text:"Variables are specific",correct:"false"},
        {text:"There is no difference",correct:"false"},
    
    ]       
},
{
    question:"Why JavaScript Engine is needed?",
    answer:[
        {text:"Both Compiling & Interpreting the JavaScript",correct:"false"},
        {text:"Parsing the javascript",correct:"false"},
        {text:"Compiling the JavaScript",correct:"false"},
        {text:"Interpreting the JavaScript",correct:"true"}
    
    ]    
},
{
    question:"How many levels of heading in HTML?",
    answer:[
        {text:"two",correct:"false"},
        {text:"three",correct:"false"},
        {text:"five",correct:"false"},
        {text:"six",correct:"true"}
    
    ]    
},
{
    question:" Which of the following methods/operation does javascript use instead of == and !=?",
    answer:[
        {text:"JavaScript uses equalto()",correct:"false"},
        {text:"JavaScript uses equals() and notequals() instead",correct:"false"},
        {text:"JavaScript uses bitwise checking",correct:"false"},
        {text:"JavaScript uses === and !== instead",correct:"true"}
    
    ]  
},{
    question:"Which of the following is not an error in JavaScript?",
    answer:[
        {text:"Missing of Bracket",correct:"false"},
        {text:" Division by zero",correct:"true"},
        {text:"Syntax error",correct:"false"},
        {text:"Missing of semicolons",correct:"false"}
    
    ]  
},
{
    question:"Why event handlers is needed in JS?",
    answer:[
        {text:"Allows JavaScript code to alter the behaviour of windows",correct:"true"},
        {text:"Adds innerHTML page to the code",correct:"false"},
        {text:"Change the server location",correct:"false"},
        {text:"Performs handling of exceptions and occurrences",correct:"false"}
    
    ]     
},
{
    question:"Which of the following is the property that is triggered in response to JS errors?",
    answer:[
        {text:"onclick",correct:"false"},
        {text:"onerror",correct:"true"},
        {text:"onmessage",correct:"false"},
        {text:"onexception",correct:"false"}
    
    ] 
},
{
    question:"Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    answer:[
        {text:"split()",correct:"false"},
        {text:"slice()",correct:"false"},
        {text:"substr()",correct:"true"},
        {text:"search()",correct:"false"}
    
    ]    
},
{
    question:"In JavaScript the x===y statement implies that",
    answer:[
        {text:"Both are equal in the value and data type",correct:"true"},
        {text:"Both are not same at all",correct:"false"},
        {text:"Both are x and y are equal in value only",correct:"false"},
        {text:"Both x and y are equal in value, type and reference address as well",correct:"false"}
    
    ]  
},
{
    question:"Which type of JavaScript language?",
    answer:[
        {text:"Object-Based",correct:"true"},
        {text:"Object-Oriented",correct:"false"},
        {text:"Assembly-language",correct:"false"},
        {text:"High-level",correct:"false"}
    
    ]    
}]
let index=0;
let score=0;
console.log(index);
register=document.querySelectorAll("#box")[0];
quiz=document.querySelectorAll("#box")[1];
console.log(quiz);
quiz.style.display="none";
submit=document.getElementById("submit");
console.log(submit);
const input=document.getElementById("username");
let username="";
function resetState(){
    nextbtn=document.getElementById("next");
    nextbtn.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}
function selectAns(e){
    const selectedbutton=e.target;
    if(selectedbutton.dataset.correct==="true")
    {
        selectedbutton.classList.add("correct");
        score++;
        console.log(score);
    }
    else{
        selectedbutton.classList.add("incorrect");
    }
    Array.from(answers.children).forEach(ans=>{
        if(ans.dataset.correct==="true")
        {
            ans.classList.add("correct");
        }
        else{
            ans.disabled=true;
        }
       
    })
    nextbtn=document.getElementById("next");
    nextbtn.style.display="block";
    }
    
function showQuestion(){
    resetState();
    if(index<20)
    {
      qElement=document.getElementById("question");
      qElement.innerText=(index+1)+"."+questions[index].question;
      answers=document.getElementById("answers");
      questions[index].answer.forEach(ans=>{
        answerb=document.createElement("button");
        answerb.innerText=ans.text;
        answerb.dataset.correct=ans.correct;
        answers.appendChild(answerb);
        answerb.addEventListener("click",selectAns);
      })
      index++;
      nextbtn=document.getElementById("next");
      nextbtn.addEventListener("click",showQuestion);
     }
     else{
        console.log("index",index);
        console.log('in else block');
        qElement=document.getElementById("question");
        qElement.style.display="none";
        answerb=document.createElement("button");
        answerb.innerText="Congratulations "+username+"! You have scored "+score+" out of 20!";
        answers.appendChild(answerb);
        const button=document.createElement("button");
        button.classList.add("ply");
        button.innerText="Play Again";
        button.style.display="block";
        document.body.appendChild(button);
        button.addEventListener("click",restart);
     }
}

function startQuiz(){
    console.log("in startQuiz");
    quiz.style.display="block";
    register.style.display="none";
    index=0;
    score=0;
    qElement=document.getElementById("question");
    qElement.style.display="block";
    showQuestion();
}
function restart(e){
    button=e.target;
    button.style.display="none";
    startQuiz();
}
submit.addEventListener("click",()=>{
    username=input.value;
    console.log(username);
    startQuiz();
});


