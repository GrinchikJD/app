import React from "react";
import { useState } from "react";

// const Counter = () => {
//     const [value, setValue] = useState(0);

//     function calculate() {
//         setValue( value + 1 );
//     }

//     return (
//         <div>
//             <div>{value}</div>
//             <button onClick={ calculate }>Press me</button>
//         </div>
//     );
// };

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
        this.calculate = this.calculate.bind(this);
    }

    calculate() {
        let self = this;
        fetch('/results.html')
        .then(function(results){
            console.log(results);
            if ( results.status === 200 ) {
                return results.json();
            } else {
                console.error("We didn't have data");
            }
            //
        })
        .then(function(getObj){
            self.setState( { value : getObj.name } );
        })
        .finally(function(){
            console.log("Fetch is done");
        });
    }

    render() {
        return(
            <div>
                <div>{this.state.value}</div>
                <button onClick={ this.calculate }>Press me</button>
            </div>
        );
    }

}

export default Counter;