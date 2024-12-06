import React from 'react';
const autoBind = require('auto-bind');
 
 
class Age extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
 
        this.state = {
            isold: false
        }
 
 
    }
 
 
    changeAge() {
        let { isold } = this.state;
        if (isold == true) {
            this.setState({ isold: false })
        } else {
            this.setState({ isold: true })
        }
        this.props.getUpdatedAge(this.state);
    }
 
    render() {
        let { isold } = this.state;
 
        if (isold) {
            return (
                <div>
                    Older than 21 <br/>
                    <button onClick={this.changeAge}> Change Age</button>
 
                </div>
            )
        } else {
            return (
                <div>
                    Less than 21 <br/>
                    <button onClick={this.changeAge}> Change Age</button>
 
                </div>
 
            )
        }
 
    }
 
}
 
 
export default Age;