var readlineSync=require("readline-sync");
var chalk=require("chalk");
var userName=readlineSync.question(chalk.blue(`What's your name?:`));
var log=console.log;
var score=0;
log(chalk.blue(`Welcome ${chalk.green(userName)}. Let's see how well you know me.`));
function displayQuestion(item){
  var userInput=readlineSync.question(questionList[item].question);
  log(`You entered:${userInput}`);
  if (userInput.toLowerCase()==questionList[item].answer.toLowerCase()){
    score=score+2;
    return log(chalk.green("You're Right!!!"));
  }
  else{
    return log(chalk.red("You're Wrong!😔"));
  }
}
function checkHighScore(){
  if (score>highScore.score){
    log(`You Scored:${chalk.green(score)}`)
    log(`Congratulations you've got a high score!! You beat ${chalk.blue(highScore.name)} by ${chalk.green(score - highScore.score)} !!`)
  }
  else{
    log(`You Scored:${chalk.blue(score)}`)
  }
}
var questionList={
  questionOne:{
    question:"1.Where do I live?",
    answer:"Bangalore"
  },
questionTwo:{
    question:"2.Where do I work?",
    answer:"Wipro"
  },
questionThree:{
    question:`3.Do I prefer ${chalk.rgb(255,165,0).bold("Dark mode")} or ${chalk.rgb(255,165,0).bold("Light mode")}?`,
    answer:"Dark mode"
  },
questionFour:{
    question:"4.What's my favorite sport to watch📺?",
    answer:"Basketball"
  },
questionFive:{
    question:`5.What's my favorite Anime👒?`,
    answer:"One Piece"
  }
};

var highScore={
  name:"Rakshith",
  score:7
};
var objList=Object.keys(questionList);
objList.map(item=>{displayQuestion(item)}).filter(notUndefined=>{notUndefined!==undefined})
checkHighScore();