import React from 'react';
const autoBind = require('auto-bind');

class Per3 extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            chineasCusine: 0
        }


    }


    changeper1() {
        let { chineasCusine } = this.state;
        if (chineasCusine) {
            this.setState({ chineasCusine: 0 })
        } else {
            this.setState({chineasCusine: 1})
        }
        this.props.getUpdatedCusine(this.state);
    }

    render() {
        let { chineasCusine } = this.state;

        if (chineasCusine==0) {
            return (
                <div>
                  
                    
                   Your date likes to go to Chinese restaurant! <br/>
                   <button onClick={this.changeper1}> yes</button>
                </div>
                
            )
        } 
        else {
            return (
                <div>
                    
                    
                    Your date disikes to go to Chinese restaurant! <br/>
                    <button onClick={this.changeper1}> No</button>

                </div>

            )
        } 

    }

}


export default Per3;