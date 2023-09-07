/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { MainCard } from '../components/Main/MainCard';
import { Typography } from '../components/Typography';
import { useRootNavigation } from '../navigations/RootNavigation';
import { Background } from '../components/Background';
import NavTabBar from '../components/Navigation/NavTabBar';
import dayjs from 'dayjs';
import RecommendAct from '../components/Main/RecommendAct';
import AppleHealthKit, {
  HealthKitPermissions,
  ElectrocardiogramSampleValue,
  HealthValue,
  BloodPressureSampleValue,
} from 'react-native-health';

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
  var [ECG, setECG] = useState<ElectrocardiogramSampleValue>();
  var [loading, setLoading] = useState(true);

  // Google Fit 초기화
  const googleFitOptions = {
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

  /* Permission options */

  const permissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.Electrocardiogram,
        AppleHealthKit.Constants.Permissions.StepCount,
        AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
        AppleHealthKit.Constants.Permissions.OxygenSaturation,
        AppleHealthKit.Constants.Permissions.SleepAnalysis,
        AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
        AppleHealthKit.Constants.Permissions.HeartRate,
      ],
      write: [],
    },
  } as HealthKitPermissions;

  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    /* Called after we receive a response from the system */

    if (error) {
      console.log('[ERROR] Cannot grant permissions!');
    }

    /* Can now read or write to HealthKit */

    const healthKitOptions = {
      startDate: dayjs().subtract(1, 'day').toISOString(),
    };

    AppleHealthKit.getElectrocardiogramSamples(
      healthKitOptions,
      (callbackError: string, results: ElectrocardiogramSampleValue[]) => {
        /* Samples are now collected from HealthKit */
        console.log('ECG', results[results.length - 1]); // [[시간, 값]] 형태 ...
        setECG(results[results.length - 1]);
      },
    );

    AppleHealthKit.getDailyStepCountSamples(
      healthKitOptions,
      (callbackError: string, results: HealthValue[]) => {
        /* Samples are now collected from HealthKit */
        console.log('step', results); // [[시간, 값]] 형태 ...
        // setdailySteps(results);
      },
    );

    AppleHealthKit.getActiveEnergyBurned(
      healthKitOptions,
      (callbackError: string, results: HealthValue[]) => {
        /* Samples are now collected from HealthKit */
        console.log('Acvtive Energey', results[results.length - 1]); // [[시간, 값]] 형태 ...
        setCalories(results[results.length - 1].value);
      },
    );

    AppleHealthKit.getOxygenSaturationSamples(
      healthKitOptions,
      (callbackError: string, results: HealthValue[]) => {
        /* Samples are now collected from HealthKit */
        console.log('Hydration', results[results.length - 1]); // [[시간, 값]] 형태 ...
        setHydration(results[results.length - 1].value);
      },
    );

    AppleHealthKit.getBloodPressureSamples(
      healthKitOptions,
      (callbackError: string, results: BloodPressureSampleValue[]) => {
        /* Samples are now collected from HealthKit */
        console.log('BP', results[results.length - 1]); // [[시간, 값]] 형태 ...
        setBloodPressure(
          results[results.length - 1].bloodPressureDiastolicValue,
        );
      },
    );
  });

  useEffect(() => {
    GoogleFit.checkIsAuthorized().then(() => {
      var authorized = GoogleFit.isAuthorized;
      console.log('authorized: ' + authorized);

      if (authorized) {
        // if already authorized, fetch data
        fetchStepsData(opt);
      } else {
        // Authentication if already not authorized for a particular device
        GoogleFit.authorize(googleFitOptions)
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
    <View style={{ flex: 1 }}>
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
          {`${dayjs().month()}/${dayjs().date()} - ⏲️ ${dayjs().hour()}:${dayjs().minute()} 기준 건강 정보`}
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
            content={calories ? calories + ' Kcal' : '234 Kcal'}
          />
          <MainCard
            title={'💤 수면  시간'}
            content={sleep ? sleep + ' 시간' : '7.3 시간'}
          />
          <MainCard
            title={'😪 전날 취침 시각'}
            content={dailySteps ? dailySteps + '' : '23:22'}
          />
          <MainCard
            title={'♥️ 평균 심박수'}
            content={heartRate ? heartRate + ' bpm' : '92 bpm'}
          />
          <MainCard
            title={'🩸 혈압'}
            content={bloodPressure ? bloodPressure + '' : '85'}
          />
          <MainCard
            title={'🍃 활성 산소'}
            content={hydration ? hydration + ' %' : '97 %'}
          />
        </ScrollView>
        <NavTabBar />
      </Background>
    </View>
  );
};
