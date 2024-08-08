const { getDefaultAutoSelectFamilyAttemptTimeout } = require('net')

const prompt = require('prompt-sync')()

console.log("Welcome to a morning in the life as Liana! in this game you will be able to control the morning of the amazing Liana, and help her decide how her morning goes. ")
console.log(" - INSTRUCTIONS: Answer questions, choose based on what you think is best, in the end, you will recieve an overall result of how her morning went")
let toDo = ["- Wake up by 6:20", "- Get ready before 7am", "- Get your brother to school", "- Get to school"]

console.log("This is what you need to do")
for (let i = 0; i < toDo.length; i+=1){
console.log(toDo[i])
}

//Questions
let question1 = {
  question: "Q1: It's 6am in the morning, should you wake up or wait to wake till your other alarm goes off at 6:20 am. (REMINDER: YOU NEED TO LEAVE THE HOUSE BY 7am) you...",
  answer: "1. Stay asleep until 6:20am",
  option1: "1",
  answer2: "2. Wake up",
  option2: "2",
  answer3: "3. Dont wake up until 7 am. ",
  option3: "3",
}
let question2 = {
  question: "Q2: It's now 7am, you got ready, and left the house, you have to drop off your brother, but now you need to choose between the 6 train or 5 train, (REMINDER: HE NEEDS TO BE IN SCHOOL BY 8 AM) you...",
  answer: "1. Take the 6 train",
  option1:"1",
  answer2: "2. Take the 5 train",
  option2:"2",
  answer3: "3. Dont take the train, instead walk all the way to his school ",
  option3:"3",
}
let question3 = {
  question: "Q3: The time is now 8:10, now that you have taken your brother to school, you have to get to school now. Take the 6, or take the bus. (REMINDER: Taking the bus will be longer, causing you to potentially be late.) you...",
  answer:" 1. Take the 6",
  option1:"1",
  answer2:"2. Take the bus",
  option2:"2",
}
let question4 = {
  question:"Q4: You get to your school block, the time is now 8:20, should you head to school, wait for your friends, or head to the store, you... ",
  answer: "1. head to school",
  option1: "1",
  answer2: "2. Wait for friends",
  option2: "2",
  answer3: "3. Head to the store",
  option3: "3",
}

//this is the whole function for the game.

function wholeGame () {
console.log("")
//Question 1
console.log(question1.question), console.log(question1.answer) , console.log(question1.answer2) ,console.log(question1.answer3)
let user = prompt("Choose your answer")

if(user == question1.option1){
  console.log("RESULT: You wake up at 6:20 and you finish getting ready a little late")
}else if(user == question1.option2){
  console.log("RESULT: You wake up now, and you get ready just in time.")
}else if(user == question1.option3){
  console.log("RESULT: You get ready extremely late and your mom yells at you the whole time")
}else {
   console.log("Not a valid answer, try again.")
  user = prompt("Choose your answer")
}

console.log("")
//Quesiton 2
console.log(question2.question), console.log(question2.answer), console.log(question2.answer2), console.log(question2.answer3)
let user1 = prompt("Choose your answer")

 
 if(user1 == question2.option1){
  console.log("RESULT: Your mom took you to the 6 train, and you dropped off your brother in time. ")
}else if(user1 == question2.option2){
  console.log("RESULT: You take the 5, its extra walking, but you end up getting your brother to school on time.")
}else if(user1 == question2.option3){
  console.log("You walk from your house to your brothers school, you both end up being extremely tired and your brother ends up being extremely late, getting yourself in huge trouble.")
}else{
  console.log("Not a valid answer, try again.")
  user1 = prompt("Choose your answer")
}

console.log(" ")
//Question 3
console.log(question3.question), console.log(question3.answer), console.log(question3.answer2)
let user2 = prompt("Choose your answer")

if(user2 == question3.option1){
  console.log("RESULT: You take the 6 and get to your school block in time.")
}else if(user2 == question3.option2){
  console.log("RESULT: You end up getting to the school block late, getting your mom mad.")
}else {
  console.log("Not a valid answer, try again.")
  user2 = prompt("Choose your answer")
}

console.log(" ")

//Question 4 
console.log(question4.question), console.log(question4.answer), console.log(question4.answer2), console.log(question4.answer3)
let user3 = prompt("Choose your answer")

if (user3 == question4.option1){
  console.log("RESULT: You get to school on time!")
}else if (user3 == question4.option2){
  console.log("RESULT: You wait for friends, knowing they take a long time to come, causing you to be late")
}else if (user3 == question4.option3){
  console.log("RESULT: You get your snacks, but at what cost? Your late.")
}else{
  console.log("Not a valid answer, try again.")
  user3 = prompt("Choose your answer")
}
  }
  
wholeGame(question1)
wholeGame(question2)
wholeGame(question3)
wholeGame(question4)




  



