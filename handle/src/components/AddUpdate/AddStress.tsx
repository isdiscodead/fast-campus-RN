import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Typography } from '../Typography';
import QuestionCard from './QuestionCard';
import styled from 'styled-components/native';
import { useRef } from 'react';

type Props = {};

const questions = [
  ['울고 싶다', '의심이 많아졌다', '무엇인가 부수고 싶다'],
  [
    '나는 무능한 사람이다',
    '삶의 의미를 잃어버린다',
    '어떤 일을 하던지 간에 완벽해야 한다',
  ],
  ['한 가지 생각에서 헤어나지 못한다', '말하기 싫다', '누군가를 때리고 싶다'],
  [
    '나는 아무 쓸모가 없는 사람이다',
    '자신감을 잃었다',
    '누구에게도 욕을 먹어서는 안된다',
  ],
  ['죽고 싶다', '사람들이 나를 싫어한다', '잘 하는 게 하나도 없다'],
  ['내가 하는 일에 전망이 없다', '일하기 싫다', '아무런 생각을 하고 싶지 않다'],
  [
    '누군가를 죽이고 싶다',
    '나는 인생의 낙오자( 또는 실패자 )다',
    '내 자신이 싫다',
  ],
];

function AddStress({}: Props) {
  const [qPage, setQPage] = React.useState(0);

  const answer = useRef<{ idx: number; value: number }[]>([
    { idx: 0, value: 0 },
  ]);

  const setAnswer = (idx: number, value: number) => {
    let flag = false;
    for (let i = 0; i < answer.current.length; i++) {
      if (answer.current[i].idx === idx) {
        answer.current[i] = { idx: idx, value: value };
        flag = true;
      }
    }
    if (flag === false) {
      answer.current.push({ idx: idx, value: value });
    }
    console.log(answer);
  };

  const getScore = () => {
    // idx 순으로 정렬
     
    // 번호 별로 가산점 넣어서 계산
  }

  return (
    <Container>
      <Typography fontSize={18}>스트레스 자가진단</Typography>
      <Text style={{ marginBottom: '3%' }}>
        지난 일주일 동안, 각 문항을 얼마나 경험했는지 체크해주세요
      </Text>
      <ScrollView horizontal={false} style={{ width: '100%' }}>
        {questions[qPage].map((e, i) => (
          <QuestionCard
            question={e}
            key={i}
            idx={(qPage + 1) * (i + 1)}
            setAnswer={setAnswer}
            answers={answer.current}
          />
        ))}
      </ScrollView>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => setQPage(qPage !== 0 ? qPage - 1 : qPage)}>
          <Text>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setQPage(qPage !== questions.length - 1 ? qPage + 1 : qPage);
            if (qPage === questions.length - 1) {
              // 설문 완료
              getScore();
            }
          }}>
          <Text>다음</Text>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View``;

export default AddStress;
