import React from 'react';
import Gender from './gender';
import Time from './time';
import Alcoholic from './alcoholic';
import Per from './p1';
import Per1 from './p2';
import Per2 from './p3';
import Per3 from './p4';
import Age from './age';
import Plan from './plan'

const autoBind = require('auto-bind');


class Counter extends React.Component{
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            count: 0,
            //updatedMaleGender: true

        }
    }

    formatCount() {
        let { count } = this.state;
        this.setState({count: count + 1});
    }

    // genderStateUpdated = (state) => {
    //     let { updatedMaleGender } = this.state;
    //     if (updatedMaleGender != state){
    //         this.setState({updatedMaleGender: false})
    //     }
    //     console.log(state);
    // };

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
    getUpdatedFoodie = (state) => {
        let { updatedFoodie } = this.state;
        if (updatedFoodie != state){
            this.setState({updatedFoodie: state})
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

    render() { 
        //let { updatedMaleGender } = this.state;
        let { count } = this.state;
        if (count == 0 ){
            return (        
                <div>
                    <dic>
                        < Gender getUpdatedGender={this.getUpdatedGender}/>
                    </dic>
                    <div>
                    <button onClick={this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        }else if(count == 1){
            return (        
                <div>
                    <dic>
                        < Time getUpdatedTime={this.getUpdatedTime}/>
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        }else if (count == 2){
            return (        
                <div>
                    <dic>
                        < Age getUpdatedAge={this.getUpdatedAge} />
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else if (count ==3){
            return (        
                <div>
                    <dic>
                        < Alcoholic getUpdatedAlcoholic={this.getUpdatedAlcoholic} />
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else if ( count == 4){
            return (        
                <div>
                    <dic>
                        < Per getUpdatedFoodie={this.getUpdatedFoodie} />
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else if (count == 5){
            return (        
                <div>
                    <dic>
                        < Per1 getUpdatedAdventure={this.getUpdatedAdventure} />
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else if (count == 6){
            return (        
                <div>
                    <dic>
                        < Per2 getUpdatedNerd={this.getUpdatedNerd} />
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else if (count == 7){
            return (        
                <div>
                    <dic>
                        < Per3 getUpdatedCusine={this.getUpdatedCusine}/>
                    </dic>
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        } else{
            return (        
                <div>
                    <dic>
                        < Plan />
                    </dic>
                </div>
            )
        }
        
        
        
       
    }
    
}

export default Counter;