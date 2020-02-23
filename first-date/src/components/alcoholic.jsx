import React from 'react';
const autoBind = require('auto-bind');
 
 
class Alcoholic extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
 
        this.state = {
            isalc: false
        }
 
 
    }
 
 
    changeAlcoholic() {
        let { isalc } = this.state;
        if (isalc == true) {
            this.setState({ isalc: false })
        } else {
            this.setState({ isalc: true })
        }
        this.props.getUpdatedAlcoholic(this.state);
    }
 
    render() {
        let { isalc } = this.state;
 
        if (isalc) {
            return (
                <div>
                    Non Alcoholic <br/>
                    <button onClick={this.changeAlcoholic}> Change to Alcoholic</button>
                    <li class="nav-item">
            <a class="nav-link" href="age.js">Contact Us</a>
          </li>
                </div>
            )
        } else {
            return (
                <div>
                    Alcoholic <br/>
                    <button onClick={this.changeAlcoholic}> Change to Non Alcoholic</button>
                </div>
 
            )
        }
 
    }
 
}
 
 
export default Alcoholic;