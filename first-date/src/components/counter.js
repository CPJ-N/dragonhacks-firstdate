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

    render() { 
        //let { updatedMaleGender } = this.state;
        let { count } = this.state;
        if (count == 0 ){
            return (        
                <div>
                    <dic>
                        < Gender onGenderStateUpdated={this.genderStateUpdated}/>
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
                        < Time />
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
                        < Age />
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
                        < Alcoholic />
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
                        < Per />
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
                        < Per1 />
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
                        < Per2 />
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
                        < Per3 />
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
                    <div>
                    <button onClick= {this.formatCount}>Next Question</button>
                    </div>
                </div>
            )
        }
        
        
        
       
    }
    
}

export default Counter;