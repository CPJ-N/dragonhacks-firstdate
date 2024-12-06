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
                    Non Alcohol <br/>
                    <button onClick={this.changeAlcoholic}> Change to Alcoholic</button>
                </div>
            )
        } else {
            return (
                <div>
                    Alcohol <br/>
                    <button onClick={this.changeAlcoholic}> Change to Non Alcoholic</button>
                </div>
 
            )
        }
 
    }
 
}
 
 
export default Alcoholic;