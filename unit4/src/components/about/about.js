import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="Aboutinfo">
                <p>FullName: {this.props.fullname}</p>
                <p>Email: {this.props.email}</p>
                <p>Old: {this.props.old}</p>
                <p>Gender: {this.props.gender}</p>
            </div>
        )
    }
}

About.defaultProps = {
    fullname: 'Hai Vu',
    email: 'hai.v@shopstack.asia',
    old: '32',
    gender: 'female'
}

export default About;