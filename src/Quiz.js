import React, {Component} from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);

    let riddle = {
      resultsArray : [8,9,10,11],
      fields1 : 5,
      fields2 : 5,
      answer : 10
    };
    this.state = {riddle};
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions(){
    return(
    <div className='options'>
    <div className='fields'><div className='field-block'>10</div> </div>
    <div className='fields'><div className='field-block'>10</div> </div>
    <div className='fields'><div className='field-block'>10</div> </div>
    <div className='fields'><div className='field-block'>10</div> </div>
    </div>
  );
  }

  render(){
    return(
      <div className='quiz'>
        <div className='quiz-content'>
          <p className='question'>What is the sum of <span className='text-info'>5</span>and <span className='text-info'>5</span>?</p>
          {this.renderOptions()}

        </div>
      </div>
    );
  }
}

export default Quiz;
