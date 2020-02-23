import React from 'react';
const autoBind = require('auto-bind');


class Gender extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            isMale: false
        }

        

    }

    

    

    changeGender() {
        let { isMale } = this.state;
        if (isMale == true) {
            this.setState({ isMale: false })
        } else {
            this.setState({ isMale: true })
        }
        this.props.getUpdatedGender(this.state);
    }

    render() {
        let { isMale } = this.state;

        if (isMale) {
            return (
                <div>
                    Hello this is a male <br/>
                    <button onClick={this.changeGender}> Change Gender</button>

                </div>
            )
        } else {
            return (
                <div>
                    Hello this is a female <br/>
                    <button onClick={this.changeGender}> Change Gender</button>

                </div>

            )
        }

    }

}


export default Gender;