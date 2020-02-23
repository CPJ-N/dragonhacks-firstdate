import React from 'react';
import Gender from './gender';
import Time from './time';
import Alcoholic from './alcoholic';
import Per from './p1';
import Per1 from './p2';
import Per2 from './p3';
import Per3 from './p4';
import Age from './age';

const autoBind = require('auto-bind');

class Plan extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            updatedNerd: 0,
            updateGender: false,
            updatedTime: true,
            updatedAge: false,
            updatedFoddie: 0,
            updatedAdventerous: 0,
            updatedChineasCusine: 0,
            updatedAlcoholic: false
        }

    }

    getUpdatedGender = (state) => {
        let { updatedGender } = this.state;
        if (updatedGender != state){
            this.setState({updatedGender: state})
        }
        //console.log(state);
    };

    getUpdatedNerd = (state) => {
        let { updatedNerd } = this.state;
        if (updatedNerd != state){
            this.setState({updatedNerd: state})
        }
        //console.log(state);
    };

    getUpdatedTime = (state) => {
        let { updatedTime } = this.state;
        if (updatedTime != state){
            this.setState({updatedGender: state})
        }
        //console.log(state);
    };
    getUpdatedAge = (state) => {
        let { updatedAge } = this.state;
        if (updatedAge != state){
            this.setState({updatedAge: state})
        }
        //console.log(state);
    };
    getUpdatedFoddie = (state) => {
        let { updatedFoddie } = this.state;
        if (updatedFoddie != state){
            this.setState({updatedFoddie: state})
        }
        //console.log(state);
    };
    getUpdatedAdventure = (state) => {
        let { updatedAdventerous } = this.state;
        if (updatedAdventerous != state){
            this.setState({updatedAdventerous: state})
        }
        //console.log(state);
    };
    getUpdatedCusine = (state) => {
        let { updatedChineasCusine } = this.state;
        if (updatedChineasCusine != state){
            this.setState({updatedChineasCusine: state})
        }
        //console.log(state);
    };
    getUpdatedAlcoholic = (state) => {
        let { updatedAlcoholic } = this.state;
        if (updatedAlcoholic != state){
            this.setState({updatedAlcoholic: state})
        }
        //console.log(state);
    };

    render(){

        return(
            <div> 
                <h2> You should take her to Hans Dynasty</h2>
                <img src="https://www.sspny.com/img/uploads/han-dynasty-nyc-east-village-menu_031113_085630.JPG" alt="Smiley face"></img>
                <h3> 
                3711 Market Street, Philadelphia PA<br/>
                (215) 222-3711 <br/>
                infoucity@handynasty.net <br/>
                </h3>
                <h2> Remember to get flowers for you date !!</h2>

            </div>
        )
    }
}

export default Plan;
