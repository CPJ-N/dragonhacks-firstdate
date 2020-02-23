import React from 'react';
const autoBind = require('auto-bind');

class Per2 extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            isNerd: 0
        }


    }


    changeper1() {
        let { isNerd } = this.state;
        if (isNerd) {
            this.setState({ isNerd: 0 })
        } else {
            this.setState({isNerd: 1})
        }
        this.props.getUpdatedNerd(this.state);
    }

    render() {
        let { isNerd } = this.state;

        if (isNerd==0) {
            return (
                <div>
                  
                    
                   Does your date like nerd stuff? <br/>
                   <button onClick={this.changeper1}> yes</button>
                </div>
                
            )
        } 
        else {
            return (
                <div>
                    
                    
                    Does your date like nerd stuff? <br/>
                    <button onClick={this.changeper1}> No</button>

                </div>

            )
        } 

    }

}


export default Per2;