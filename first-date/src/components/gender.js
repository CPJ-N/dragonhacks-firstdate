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
                    Your Date is a Male <br/>
                    <button onClick={this.changeGender}> Change Gender</button>

                </div>
            )
        } else {
            return (
                <div>
                    Your Date is a Female <br/>
                    <button onClick={this.changeGender}> Change Gender</button>

                </div>

            )
        }

    }

}


export default Gender;