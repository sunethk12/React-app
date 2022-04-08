import React, { Component } from 'react'

export class Welcome extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'suneth',
            age:20
        }
    }

    changeD=()=>{
this.setState(
    {
        name:'kanchana',
        age:24
    }
)
    }


  render() {
    return (
        <div>
      <div>Hello your name is {this.state.name} and age is {this.state.age} </div>
      <button onClick={this.changeD}>Change Details</button>
      </div>
    )
  }
}

export default Welcome;