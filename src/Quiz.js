import React, {Component} from 'react';
import QuizOptions from './QuizOptions';
import classNames from 'classnames/bind';

class Quiz extends Component {
  constructor(props) {
    super(props);
    let riddle = this.playGame();
    let correct = false;
    let gameOver = false;

    this.state = {riddle};
    this.renderOptions = this.renderOptions.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.play = this.play.bind(this);
  }
   randomNumber(min, max){
     return Math.floor(Math.random() * (max-min+1))+min;
   }
   //To generate Random options
   generateRandomOptions(sum){
     let result = sum;
     let resultsArray = [];
     let randomNumberArray = [];
     while(randomNumberArray.length <= 3){
       let randomNumber = this.randomNumber(1,19);
       if(randomNumberArray.indexOf(randomNumber)>-1) continue;
       randomNumberArray.push(randomNumber);
     }

     //check for 3 numbers
     for(let i=0;i<3;i++){
       let addSubtract = this.randomNumber(0,1);
       let result = sum;
       if(addSubtract === 1){
         //add the number to the result
         result += randomNumberArray[i]
         resultsArray.push(result)
       } else {
         //Subtract the number from result
         result -= randomNumberArray[i]
         resultsArray.push(result)
       }
     }
      return resultsArray;
   }

  playGame(){

    let field1 = this.randomNumber(20,40);
    let field2 = this.randomNumber(20,40);
    let result = field1+field2;
    let resultsArray = this.generateRandomOptions(result);
    resultsArray.push(result)
    resultsArray.sort(function(a,b) {return 0.5-Math.random() })
    let riddle = {
      resultsArray : resultsArray,
      field1 : field1,
      field2 : field2,
      answer : result
    };
    console.log(riddle);
    if(this.state && this.state.gameOver){
      this.setState({riddle:riddle});
    }else{
      return riddle;
    }

    return riddle;
  }
  checkResult(option){
    if(this.state.riddle.answer === option){
        console.log("correct ");
        this.setState({correct: true,gameOver:true})
      }else {
        console.log("Wrong ");
        this.setState({correct: false,gameOver:false})
      }
  }
  renderOptions(){
    return(
    <div className='options'>
    {this.state.riddle.resultsArray.map((option, i) =>
      <QuizOptions option= {option} key={i} checkResult={this.checkResult}/>
    )}

    </div>
  );
  }

  renderMessage(){
    if(this.state.correct){
      return <h3>Good Job...Press the Play Again Button to play</h3>
    }else{
      return <h3>opss...Press the Play Again Button to play</h3>
    }
  }
 play(){
   this.setState({correct:false,gameOver:false})
   this.playGame();
 }
  render(){
    return(
      <div className='quiz'>
        <div className='quiz-content'>
          <p className='question'>What is the sum of <span className='text-info'>{this.state.riddle.field1}</span>and <span className='text-info'>{this.state.riddle.field2}</span>?</p>
        </div>
        {this.renderOptions()}
        <div className={classNames('after', {'hide': !this.state.gameOver}, {'wrong animate__animated animate__zoomInDown': !this.state.correct}, {'correct animate__animated animate__zoomInDown': this.state.correct})}>
          {this.renderMessage()}
        </div>
        <div className= "play-again">
          <a className= "button" onClick={this.play} >Play again</a>
        </div>
      </div>
    );
  }
}

export default Quiz;
