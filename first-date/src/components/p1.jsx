import React from 'react';
const autoBind = require('auto-bind');

class Per extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            isfoodie: 0
        }


    }


    changeper() {
        let { isfoodie } = this.state;
        if (isfoodie) {
            this.setState({ isfoodie: 0 })
        } else {
            this.setState({isfoodie: 1})
        }
        this.props.getUpdatedFoodie(this.state);
    }

    render() {
        let { isfoodie } = this.state;

        if (isfoodie==0) {
            return (
                <div>
                  
                    
                   Is your date a foodie? <br/>
                   <button onClick={this.changeper}> yes</button>
                </div>
                
            )
        } 
        else {
            return (
                <div>
                    
                    
                    Is your date a foodie? <br/>
                    <button onClick={this.changeper}> No</button>

                </div>

            )
        } 

    }

}


export default Per;

