import { useState } from 'react'

export const useCalculator = () => {
    const [input, setInput] = useState(0);
    const [currentOperator, setCurrentOperator] = useState(null);
    const [result, setResult] = useState(null);
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);
  
    // AC / C를 구분하기 위함
    const hasInput = !!input; // 존재하는지를 알기 위해 not 연산 2회 
  
    // 두 번째 수도 여러 자리수로 사용할 수 있게끔 예외처리를 위함
    const [isClickedOperator, setIsClickedOperator] = useState(false);
  
    // =을 눌러서 여러번 더하는 기능을 위함 
    const [isClickedEqual, setIsClickedEqual] = useState(false);
  
    // 숫자 입력
    const onPressNum = (num) => {
      if ( currentOperator && isClickedOperator ) {
        setResult(input);
        setInput(num);
      } else {
        setInput( Number(`${input}${num}`));
      }
    }
  
    // 연산자 입력
    const onPressOperator = (operator) => {
  
      if ( operator !== "=" ) {
        setCurrentOperator(operator);
        setIsClickedOperator(true);
        setIsClickedEqual(false);
  
      } else {
        let finalResult = result;
        const finalInput = isClickedEqual ? tempInput : input;
        // operator 초기화 후에도 =을 눌러 여러번 연산 가능하도록 함
        const finalOperator = isClickedEqual ? tempOperator : currentOperator;
        switch ( currentOperator ) {
          case '+' :
            finalResult += finalInput;
            break;
          case '-' :
            finalResult -= finalInput;
            break;
          case '*' :
            finalResult *= finalInput;
            break;
          case '/' :
            finalResult /= finalInput;
            break;
          case 'AC' :
            finalResult = 0;
          default:
            break;
        }
  
        setResult(finalResult);
        setInput(finalResult);
        setTempInput(finalInput);
        setCurrentOperator(null); // 초기화
        setTempOperator(finalOperator);
        setIsClickedEqual(true);
      }
    }
  
    const onPressReset = () => {
      if ( hasInput ) {
        // C를 눌렀을 때는 현재 input만 삭제
        setInput(0);
      } else {
        setInput(0);
        setCurrentOperator(null);
        setResult(null);
        setTempInput(null);
        setTempOperator(null);
      }
    }
  
    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressOperator,
        onPressNum,
        onPressReset
    }
}
