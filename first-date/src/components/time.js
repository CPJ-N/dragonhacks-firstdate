import React from 'react';
const autoBind = require('auto-bind');


class Time extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            isMorning: true
        }


    }


    changeTime() {
        let { isMorning } = this.state;
        if (isMorning == true) {
            this.setState({ isMorning: false })
        } else {
            this.setState({ isMorning: true })
        }
        this.props.getUpdatedTime(this.state);
    }

    render() {
        let { isMorning } = this.state;

        if (isMorning) {
            return (
                <div>
                    Your date is in the Afternoon! <br/>
                    <button onClick={this.changeTime}> Change to Evening</button>

                </div>
            )
        } else {
            return (
                <div>
                    Your date is in the Evening!  <br/>
                    <button onClick={this.changeTime}> Change to Afternonn</button>

                </div>

            )
        }

    }

}


export default Time;