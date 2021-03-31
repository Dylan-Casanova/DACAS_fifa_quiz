var startEl = $("#startQuiz")
var displayel =$("#question")
var Answers = $("#answers")
var mainDisplay = $("#greeting")
var score = 0
var time = 60
var questionCount=0
var Questions = {
   q1 : {
       question : "What country was the host of the first World Cup?", 
       multipleChoice: [" Uruguay ", " Germany ", " Brasil ", " Colombia "],
       answer: 1
   },
   q2 : {
    question : "What is the team with the most World cups?", 
    multipleChoice: ["Uruguay", "Germany", "Brasil", "Colombia"],
    answer: 2
},
    q3 : {
    question : "Where was the last World Cup hosted at?", 
    multipleChoice: ["England", "Russia", "USA", "South Africa"],
    answer: 1
},
    q4 : {
    question : "Where will the next World Cup take place", 
    multipleChoice: ["USA", "", "USA", "South Africa"],
    answer: 1
},
    q5 : {
    question : "Who is the all time World Cup scorer?", 
    multipleChoice: ["Klose", "Ronaldo", "Muller", "Messi"],
    answer: 0
}}

startEl.on('click',function(){
   
    
   start()  
   var A=$("#0")
    var B =$("#1")
    var C =$("#2")
    var D =$("#3") 
    
A.on('click',function(){
    var answer = this.id
    
    var correctAnswer =Questions.q1.answer
    testAnswer(answer,correctAnswer)
    

    
})

B.on('click',function(){
    var answer = this.id
   
    var correctAnswer =Questions.q1.answer
    testAnswer(answer,correctAnswer)
    
})
C.on('click',function(){
    var answer = this.id
   
    var correctAnswer =Questions.q1.answer
    testAnswer(answer,correctAnswer)
    
})
D.on('click',function(){
    var answer = this.id
   
    var correctAnswer =Questions.q1.answer
    testAnswer(answer,correctAnswer)
    
})

})



function testAnswer(answer,correctAnswer){
    
    console.log(correctAnswer)
    console.log(answer)
    if (answer == correctAnswer){
         score ++
         questionCount++
        
        } else {
            time -=10
            questionCount++
        }
    console.log(score)
    console.log(time)
    console.log(questionCount)


}
function start () {
    var random = Questions.q1
    mainDisplay.text(random.question)
  for (var i = 0; i < Questions.q1.multipleChoice.length; i++) {
    document.getElementById("greeting").innerHTML += "<br> <button id="+i+">" + Questions.q1.multipleChoice[i] + "</button>";} 
} 






