import React, {useEffect, useState} from 'react';
import './Calculator.css';

function Calculator() {
    const [firstNum , setFirstNum ] = useState('');
    const [firstSet , setFirstSet ] = useState(0);
    const [secondNum, setSecondNum ] = useState('');
    const [ oprtr, setOprtr] = useState('');

    let handleNumClick = (val) => {
        if(firstSet === 0){
            setFirstNum(firstNum+val);
        }
        else{
            setSecondNum(secondNum+val);
        }
    }

    let handleOperatorClick = (val) => {
        setOprtr(val);
        setFirstSet(1);
    }

    let handleResultClick = () => {
        if(firstNum === '' || secondNum === ''){
            console.log("A number is empty!")
            return false;
        }

        if(oprtr === '+'){
            const rslt = (parseFloat(firstNum) + parseFloat(secondNum));
            setFirstNum(rslt);
        }
        else if(oprtr === '-'){
            const rslt = (parseFloat(firstNum) - parseFloat(secondNum));
            setFirstNum(rslt);
        }
        else if(oprtr === '*'){
            const rslt = (parseFloat(firstNum) * parseFloat(secondNum));
            setFirstNum(rslt);
        }
        else if(oprtr === '/'){
            const rslt = (parseFloat(firstNum) / parseFloat(secondNum));
            setFirstNum(rslt);
        }
        else if(oprtr === '%'){
            const rslt = (parseFloat(firstNum) % parseFloat(secondNum));
            setFirstNum(rslt);
        }

        setSecondNum('');
        setOprtr('');
    }

    let handleAC = () => {
        setFirstNum('');
        setSecondNum('');
        setOprtr('');
        setFirstSet(0);
    }
  return (
    <div>
        <div className='result'>
            {firstNum} {oprtr} {secondNum}
        </div>
        <div>
            <button className='btnTwiceSize' onClick={handleAC}>AC</button>
            <button value="%" onClick={(e) => (handleOperatorClick(e.target.value))}>%</button>
            <button value="/" onClick={(e) => (handleOperatorClick(e.target.value))}>/</button>
        </div>
        <div>
            <button value="7" onClick={(e) => (handleNumClick(e.target.value))}>7</button>
            <button value="8" onClick={(e) => (handleNumClick(e.target.value))}>8</button>
            <button value="9" onClick={(e) => (handleNumClick(e.target.value))}>9</button>
            <button value="*" onClick={(e) => (handleOperatorClick(e.target.value))}>x</button>
        </div>
        <div>
            <button value="4" onClick={(e) => (handleNumClick(e.target.value))}>4</button>
            <button value="5" onClick={(e) => (handleNumClick(e.target.value))}>5</button>
            <button value="6" onClick={(e) => (handleNumClick(e.target.value))}>6</button>
            <button value="-" onClick={(e) => (handleOperatorClick(e.target.value))}>-</button>
        </div>
        <div>
            <button value="1" onClick={(e) => (handleNumClick(e.target.value))}>1</button>
            <button value="2" onClick={(e) => (handleNumClick(e.target.value))}>2</button>
            <button value="3" onClick={(e) => (handleNumClick(e.target.value))}>3</button>
            <button value="+" onClick={(e) => (handleOperatorClick(e.target.value))}>+</button>
        </div>
        <div>
            <button className='btnTwiceSize' value="0" onClick={(e) => (handleNumClick(e.target.value))}>0</button>
            <button value="." onClick={(e) => (handleNumClick(e.target.value))}>,</button>
            <button onClick={handleResultClick}>=</button>
        </div>
    </div>
  )
}

export default Calculator