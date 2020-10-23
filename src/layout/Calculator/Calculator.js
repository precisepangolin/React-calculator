import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';
import {e, evaluate, larger} from 'mathjs';
import computationScreen from './Screen/ComputationScreen/ComputationScreen';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }  
    onButtonPress = (button) => {
        let equation = this.state.equation;
        const pressedButton = button;

        if (pressedButton === 'C') {
            return this.clear();
        }
        else if ((pressedButton >= '0' && pressedButton <= '9') || (pressedButton === '.')) {
            equation += pressedButton;
        }
        else if (['+', '-', '*', '/'].indexOf(pressedButton) != -1) { 
            equation += ''+pressedButton+'';
        }
        else if (pressedButton === '%') { 
            equation += '%';  
        }
        else if (pressedButton === '=') {
            try {
                var equa = equation.replace('%', "*0.01");
                const evalResult = evaluate(equa);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result});
            } 
            catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length -1);
        } 
        this.setState({equation: equation});
    }
    clear() {
        this.setState({equation: '', result: 0});
    }
    onKeyDown(event) {
        if ((event.key >= '0' && event.key <= '9') || (event.key === '.')) {
            this.onButtonPress(event.key);
        }
        else if (['+', '-', '*', '/'].indexOf(event.key) != -1) {
            this.onButtonPress(''+event.key+'');
        }
        else if (event.key === "Enter" || event.key === "=") {
            this.onButtonPress(''+event.key+'');
        }
        else if (event.key === "Backspace") {
            this.onButtonPress('&larr;');
        }
        else if (event.key === "Delete") {
            this.onButtonPress('C');
        }
    }
    render() {
        return (
            <main className="calculator" tabIndex="1" onKeyDown={this.onKeyDown.bind(this)}>
            <Screen equation={this.state.equation} result={this.state.result}/>
            <Keypad onButtonPress={(event) => this.onButtonPress(event.target.innerHTML)}/>
            </main>
        );
    }
}

export default Calculator;