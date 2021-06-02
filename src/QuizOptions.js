import React, {Component} from 'react';

class QuizOptions extends Component {
  constructor(props){
    super(props);

    this.state = {};
    this.callParentCheckResult =this.callParentCheckResult.bind(this);
  }

  callParentCheckResult(){
    this.props.checkResult(this.props.option);
  }
  render(){
    return (
      <div className='fields animate__animated animate__zoomIn' onClick = {this.callParentCheckResult}>
      <div className='field-block'>{this.props.option}</div> </div>
    );
  }
}

export default QuizOptions;
