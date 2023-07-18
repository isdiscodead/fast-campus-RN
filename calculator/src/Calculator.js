import React,{ useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import styled from "styled-components";
import { useCalculator } from "./useCalculator";

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
  
  const {
      input,
      currentOperator,
      result,
      tempInput,
      tempOperator,
      hasInput,
      onPressOperator,
      onPressNum,
      onPressReset
  } = useCalculator();

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
