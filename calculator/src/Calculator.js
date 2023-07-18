import React,{ useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import styled from "styled-components";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ 
        flex, backgroundColor, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 50,
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: "darkgray",
      }}
    ><Text style={{ color: '#fff', fontSize: 20, }}>{ text }</Text></TouchableOpacity>
  );
};

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%; 
`;

const InputContainer = styled.View`
  background-color: ${ COLOR.RESULT };
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
`;


export const Calculator = () => {
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

  return (
    <View style={{ flex: 1, width: 250 }}>
      <InputContainer>
        <Text style={{ color: '#fff', fontSize: 35, textAlign: 'right' }}>{ input }</Text>
      </InputContainer>

      <ButtonContainer>
        <Button type="reset" 
          text={ hasInput ? "C" : "AC"}
          onPress={onPressReset} 
          flex={3} 
        />
        <Button type="operator" 
          text="/" 
          onPress={() => onPressOperator("/")} 
          flex={1} 
          isSelected={ currentOperator === "/" }
        />
      </ButtonContainer>

      <ButtonContainer>
        { [7, 8, 9].map((num) => (
          <Button
            key={`${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="*"
          onPress={() => onPressOperator("*")}
          flex={1}
          isSelected={ currentOperator === "*" }
        />
      </ButtonContainer>

      <ButtonContainer>
      { [4, 5, 6].map((num) => (
          <Button
            key={`${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          flex={1}
          isSelected={ currentOperator === "-" }
        />
      </ButtonContainer>

      <ButtonContainer>
      { [1, 2, 3].map((num) => (
          <Button
            key={`${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          flex={1}
          isSelected={ currentOperator === "+" }
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
        <Button type="operator" text="=" onPress={() => onPressOperator("=")} flex={1} />
      </ButtonContainer>
    </View>
  );
};
