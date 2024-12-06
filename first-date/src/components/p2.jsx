import React from 'react';
const autoBind = require('auto-bind');

class Per1 extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            isAd: 0
        }


    }


    changeper1() {
        let { isAd } = this.state;
        if (isAd) {
            this.setState({ isAd: 0 })
        } else {
            this.setState({isAd: 1})
        }
        this.props.getUpdatedAdventure(this.state);
    }

    render() {
        let { isAd } = this.state;

        if (isAd==0) {
            return (
                <div>
                  
                    
                   Is your date an adventuruous person? <br/>
                   <button onClick={this.changeper1}> yes</button>
                </div>
                
            )
        } 
        else {
            return (
                <div>
                    
                    
                    Is your date an adventuruous person? <br/>
                    <button onClick={this.changeper1}> No</button>

                </div>

            )
        } 

    }

}


export default Per1;