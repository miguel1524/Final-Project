function problemOne() {
 var quizScore = 0
  var questionOne = document.querySelector("input[name='cod']:checked").value
  if (questionOne == "cel") {
    quizScore = quizScore + 1
  }
  var questionTwo = document.querySelector("input[name='year']:checked").value
  if (questionTwo == "ov") {
    quizScore = quizScore + 1
  }

  var questionThree = document.querySelector("input[name='first']:checked").value
  if (questionThree == "mag") {
    quizScore = quizScore + 1
  }
 
  var questionFour = document.querySelector("input[name='console']:checked").value
  if (questionFour == "360") {
    quizScore = quizScore + 1
  } 

 
  var questionFive = document.querySelector("input[name='sold']:checked").value
  if (questionFive == "ps2") {
    quizScore = quizScore + 1
  } 

 
  var questionSix = document.querySelector("input[name='worst']:checked").value
  if (questionSix == "5200") {
    quizScore = quizScore + 1
  } 


  var questionSeven = document.querySelector("input[name='fcod']:checked").value
  if (questionSeven == "cod1") {
    quizScore = quizScore + 1
  }

 
  var questionEight = document.querySelector("input[name='ch']:checked").value
  if (questionEight == "ov23") {
    quizScore = quizScore + 1
  } 

  
  var questionNine = document.querySelector("input[name='sell']:checked").value
  if (questionNine == "mar") {
    quizScore = quizScore + 1
  }

  
  var questionTen= document.querySelector("input[name='phone']:checked").value
  if (questionTen == "nok") {
    quizScore = quizScore + 1
  }
  alert("Your score is...")
  alert(quizScore)
}