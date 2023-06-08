import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import { View,  ImageBackground, Text, ScrollView, } from 'react-native'
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { MainCard } from '../components/Main/MainCard';
import { Typography } from '../components/Typography';
import { NavigationBar } from '../components/Navigation/NavigationBar';


export const MainScreen:React.FC = () => {

  var [dailySteps, setdailySteps] = useState(0);
  var [heartRate, setHeartRate] = useState(0);
  var [calories, setCalories] = useState(0);
  var [hydration, setHydration] = useState(0);
  var [sleep, setSleep] = useState(0);
  var [weight, setWeight] = useState(0);
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
  var today = new Date();
  var lastWeekDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 8,
  );

  const opt = {
    startDate: lastWeekDate.toISOString(), // required ISO8601Timestamp
    endDate: today.toISOString(), // required ISO8601Timestamp
    bucketUnit: 'DAY', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };


  let fetchStepsData = async (opt:any) => {
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
      console.log("authorized: "+authorized);
      if (authorized) {
        // if already authorized, fetch data
      } else {
        // Authentication if already not authorized for a particular device
        GoogleFit.authorize(options)
          .then(authResult => {
            if (authResult.success) {
              console.log('AUTH_SUCCESS');

              // if successfully authorized, fetch data
            } else {
              console.log('AUTH_DENIED ' + authResult.message);
            }
          })
          .catch(() => {
            console.log('AUTH_ERROR');
          });
      }
    });

    fetchStepsData(opt);
  }, []);
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../imgs/background.jpeg')}
        style={{ flex: 1 }}
        blurRadius={30}
      >
          <Header>
              <Header.Title title={ "🫧 Handle" } />
          </Header>

          <View style={{
            padding: 30,
            marginBottom: 40,
          }}>
            <Typography fontSize={18}>
              생체 시계 / 건강 데이터 기반의 추천 활동
            </Typography>
            <Typography fontSize={14}>
              ✓ { "추천 활동 1에 대한 설명 ... "}
            </Typography>
            <Typography fontSize={14}>
            ✓ { "추천 활동 1에 대한 설명 ... "}
            </Typography>
          </View>

          <ScrollView contentContainerStyle={{ display: "flex", flexWrap:"wrap", flexDirection:"row", justifyContent: "space-around" }}>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
            <MainCard title={"걸음 수"} content={ dailySteps ? dailySteps+"" : "no data" }></MainCard>
          </ScrollView>

          <NavigationBar>
            
          </NavigationBar>
        </ImageBackground>
    </View>
  )
}