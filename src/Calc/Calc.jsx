import React, { useState } from 'react';  
import '../Calc/Calc.css';

function Calc() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className=''>
            <div className="container">
                <div >
                    <div className='calc'>
                        <div className='header'>
                            <div className='titles'>
                                Calculator
                            </div>
                        </div>
                        <div className='display'>
                            <div className='display-main'>
                                {result || input || '0'}
                            </div>
                        </div>

                        <div className='row'>
                            <button className='button ac' onClick={() => handleButtonClick('C')}>C</button>
                            <button className='button' onClick={() => handleButtonClick('/')}>/</button>
                            <button className='button' onClick={() => handleButtonClick('*')}>*</button>
                            <button className='button' onClick={() => handleButtonClick('%')}>%</button>
                        </div>

                        <div className='row'>
                            <button className='button' onClick={() => handleButtonClick('7')}>7</button>
                            <button className='button' onClick={() => handleButtonClick('8')}>8</button>
                            <button className='button' onClick={() => handleButtonClick('9')}>9</button>
                            <button className='button' onClick={() => handleButtonClick('-')}>-</button>
                        </div>

                        <div className='row'>
                            <button className='button' onClick={() => handleButtonClick('4')}>4</button>
                            <button className='button' onClick={() => handleButtonClick('5')}>5</button>
                            <button className='button' onClick={() => handleButtonClick('6')}>6</button>
                            <button className='button' onClick={() => handleButtonClick('+')}>+</button>
                        </div>

                        <div className='bottom-row'>
                            <div className='left'>
                                <button className='button' onClick={() => handleButtonClick('1')}>1</button>
                                <button className='button' onClick={() => handleButtonClick('2')}>2</button>
                                <button className='button' onClick={() => handleButtonClick('3')}>3</button>
                                <button className='button zero' onClick={() => handleButtonClick('0')}>0</button>
                                <button className='button' onClick={() => handleButtonClick('.')}>.</button>
                            </div>
                            <div className='right'>
                                <button className='button eq' onClick={() => handleButtonClick('=')}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calc;
