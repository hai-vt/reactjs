import React, { Component } from 'react';

class About extends Component {
     constructor() {
    super();
    this.state = {
      old: 31,
    };
  }

  updateOld() {
    this.setState((prevState, props) => {
      return { old: prevState.old + 1 }
    });
  }
    render() {
        return (
            <div class="Aboutinfo">
                <p>FullName: {this.props.fullname}</p>
                <p>Email: {this.props.email}</p>
                <p><span onClick={() => this.updateOld()}>Old</span>: {this.state.old}</p>
                <p>Gender: {this.props.gender}</p>
            </div>
        )
    }
}

About.defaultProps = {
    fullname: 'Hai Vu',
    email: 'hai.v@shopstack.asia',
    gender: 'female'
}

export default About;