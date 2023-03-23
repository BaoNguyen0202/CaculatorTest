
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Calculator = () => {
const [result, setResult] = useState('0');
const [input, setInput] = useState('');
const [operator, setOperator] = useState('');

const handleNumberPress = (num: string) => {
setInput((prevInput) => prevInput + num);
};

const handleOperatorPress = (op: string) => {
setOperator(op);
setResult(input);
setInput('');
};

const handleEqualPress = () => {
let res: string;
switch (operator) {
case '+':
res = (parseFloat(result) + parseFloat(input)).toString();
break;
case '-':
res = (parseFloat(result) - parseFloat(input)).toString();
break;
case '*':
res = (parseFloat(result) * parseFloat(input)).toString();
break;
case '/':
res = (parseFloat(result) / parseFloat(input)).toString();
break;

default:
return;
}
setResult(res);
setInput('');
};

const handleClearPress = () => {
console.log('aaaaa',input.length-1)

setInput('');
setResult('0');
setOperator('');
};
const handleClear = () => {
    setInput(input.substring(0, input.length - 1));
};
const handlePercent = () => {
    const percentage = eval(result) / 100;
    setResult(percentage.toString());   
    
};

return (
<View style={styles.container}>
<View style={styles.resultContainer}>
<Text style={styles.result}>{result}</Text>
</View>
<View style={styles.inputContainer}>
<Text style={styles.input}>{input}</Text>
</View>
<View style={styles.buttonContainer}>
<TouchableHighlight style={styles.button} onPress={() => handleClearPress()}>
<Text style={styles.buttonText}>C</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handlePercent()}>
<Text style={styles.buttonText}>%</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleClear()}>
<Text style={styles.buttonText}>X</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleOperatorPress('+')}>
<Text style={styles.buttonText}>+</Text>
</TouchableHighlight>
</View>
<View style={styles.buttonContainer}>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('7')}>
<Text style={styles.buttonText}>7</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('8')}>
<Text style={styles.buttonText}>8</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('9')}>
<Text style={styles.buttonText}>9</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleOperatorPress('-')}>
<Text style={styles.buttonText}>-</Text>
</TouchableHighlight>
</View>
<View style={styles.buttonContainer}>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('4')}>
<Text style={styles.buttonText}>4</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('5')}>
<Text style={styles.buttonText}>5</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('6')}>
<Text style={styles.buttonText}>6</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleOperatorPress('*')}>
<Text style={styles.buttonText}>*</Text>
</TouchableHighlight>
</View>
<View style={styles.buttonContainer}>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('1')}>
<Text style={styles.buttonText}>1</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('2')}>
<Text style={styles.buttonText}>2</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('3')}>
<Text style={styles.buttonText}>3</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleOperatorPress('/')}>
<Text style={styles.buttonText}>/</Text>
</TouchableHighlight>
</View>
<View style={styles.buttonContainer}>
<TouchableHighlight style={styles.button} onPress={() => handleNumberPress('0')}>
<Text style={styles.buttonText}>--</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.clearButton} onPress={() => handleNumberPress('0')}>
<Text style={styles.buttonText}>0</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleNumberPress('.')}>
<Text style={styles.buttonText}>.</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.operatorButton} onPress={() => handleOperatorPress('=')}>
<Text style={styles.buttonText}>=</Text>
</TouchableHighlight>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: 'space-between',

},
resultContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'flex-end',
},
inputContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'flex-end',
},
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
button: {
width: 60,
height: 60,
borderWidth: 0.5,
borderColor: '#808080',
justifyContent: 'center',
alignItems: 'center',
},
operatorButton: {
width: 60,
height: 60,
borderWidth: 0.5,
borderColor: '#808080',
justifyContent: 'center',
alignItems: 'center',
},
clearButton: {
width: 60,
height: 60,

justifyContent: 'center',
alignItems: 'center',
borderWidth: 0.5,
borderColor: '#808080',
},
buttonText: {
fontSize: 24,
color: '#333',
},
result: {
fontSize: 64,
fontWeight: 'bold',
color: '#333',
},
input: {
fontSize: 32,
fontWeight: 'bold',
color: '#777',
},
});

export default Calculator;