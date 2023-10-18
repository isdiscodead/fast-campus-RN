/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Header} from '../components/Header/Header';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import {MainCard} from '../components/Main/MainCard';
import {Typography} from '../components/Typography';
import {useRootNavigation} from '../navigations/RootNavigation';
import {Background} from '../components/Background';
import NavTabBar from '../components/Navigation/NavTabBar';
import dayjs from 'dayjs';
import RecommendAct from '../components/Main/RecommendAct';

export const MainScreen: React.FC = () => {
  // nav
  const navigation = useRootNavigation();

  // datetime
  const today = dayjs();
  const lastWeekDate = today.subtract(1, 'week');

  // health data
  var [dailySteps, setdailySteps] = useState(0);
  var [heartRate, setHeartRate] = useState(0);
  var [calories, setCalories] = useState(0);
  var [hydration, setHydration] = useState(0);
  var [sleep, setSleep] = useState(0);
  var [bloodPressure, setBloodPressure] = useState({});
  var [loading, setLoading] = useState(true);

  // Google Fit 초기화
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
      Scopes.FITNESS_BLOOD_PRESSURE_READ,
      Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
      Scopes.FITNESS_BLOOD_GLUCOSE_READ,
      Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
      Scopes.FITNESS_NUTRITION_WRITE,
      Scopes.FITNESS_SLEEP_READ,
    ],
  };

  // 헬스 데이터 가져오기
  const opt = {
    startDate: lastWeekDate.toISOString(), // required ISO8601Timestamp
    endDate: today.toISOString(), // required ISO8601Timestamp
    bucketUnit: 'DAY', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };

  let fetchStepsData = async (opt: any) => {
    const res = await GoogleFit.getDailyStepCountSamples(opt);
    if (res.length !== 0) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].source === 'com.google.android.gms:estimated_steps') {
          let data = res[i].steps.reverse();
          setdailySteps(data[0].value);
        }
      }
    } else {
      console.log('Not Found');
    }
  };

  useEffect(() => {
    GoogleFit.checkIsAuthorized().then(() => {
      var authorized = GoogleFit.isAuthorized;
      console.log('authorized: ' + authorized);

      if (authorized) {
        // if already authorized, fetch data
        fetchStepsData(opt);
      } else {
        // Authentication if already not authorized for a particular device
        GoogleFit.authorize(options)
          .then(authResult => {
            if (authResult.success) {
              // if successfully authorized, fetch data
              console.log('AUTH_SUCCESS');
              fetchStepsData(opt);
            } else {
              console.log('AUTH_DENIED ' + authResult.message);
            }
          })
          .catch(() => {
            console.log('AUTH_ERROR');
          });
      }
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Background>
        <Header>
          <Header.Title title={'🫧 Handle'} />
        </Header>

        <View
          style={{
            padding: 30,
            marginBottom: 10,
          }}>
          <View
            style={{
              marginBottom: 5,
            }}>
            <Typography fontSize={20}>✨ 마음 챙김 추천 활동 ✨</Typography>

            <Text>👀 생체 시계와 건강 정보를 토대로 추천되는 활동입니다.</Text>
          </View>

          <RecommendAct />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff40',
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              borderRadius: 10,
              height: 60,
              margin: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Update')}>
            <Typography fontSize={22}>✏️ 마음 챙김 기록하기 </Typography>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
          }}>
          06/01 - ⏲️ 15:23 기준 건강 정보
        </Text>

        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MainCard
            title={'👟 걸음 수'}
            content={dailySteps ? dailySteps + ' 걸음' : '10298 걸음'}
          />
          <MainCard
            title={'🔥 활동 칼로리'}
            content={dailySteps ? dailySteps + ' Kcal' : '234 Kcal'}
          />
          <MainCard
            title={'💤 수면  시간'}
            content={dailySteps ? dailySteps + ' 시간' : '7.3 시간'}
          />
          <MainCard
            title={'😪 전날 취침 시각'}
            content={dailySteps ? dailySteps + '' : '23:22'}
          />
          <MainCard
            title={'♥️ 평균 심박수'}
            content={dailySteps ? dailySteps + ' bpm' : '92 bpm'}
          />
          <MainCard
            title={'🩸 혈압'}
            content={dailySteps ? dailySteps + '' : '85'}
          />
          <MainCard
            title={'🍃 활성 산소'}
            content={dailySteps ? dailySteps + ' %' : '97 %'}
          />
        </ScrollView>
        <NavTabBar />
      </Background>
    </View>
  );
};
