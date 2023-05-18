import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import { View,  ImageBackground, Text, ScrollView, TouchableOpacityComponent, } from 'react-native'
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { MainCard } from '../components/Main/MainCard';
import { Typography } from '../components/Typography';
import { NavigationBar } from '../components/Navigation/NavigationBar';
import { TabIcon } from '../components/Navigation/TabIcon';


export const MainScreen:React.FC = () => {

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
            marginBottom: 10,
          }}>

            <View style={{
              marginBottom: 5,
            }}>
              <Typography fontSize={20}>
              ✨ 마음 챙김 추천 활동 ✨
              </Typography>

              <Text>
                👀 생체 시계와 건강 정보를 토대로 추천되는 활동입니다. 
              </Text>
            </View>
            
            <Typography fontSize={16}>
              ✓ { "저녁 시간이 다가오고 있어요! 저녁 식사 전에 가벼운 운동 어떠신가요?"}
            </Typography>
            <Typography fontSize={16}>
              ✓ { "현재 걸음 수가 충분히 높으시네요, 부지런히 돌아다니신 것 같아요. 칭찬합니다 👏"}
            </Typography>
          </View>

          <View>
            <View style={{
               backgroundColor: "#ffffff40",
               borderBottomColor: '#fff',
               borderBottomWidth: 1,
               borderRadius: 10,
               height: 60,
               margin: 20,
               display: "flex",
               alignItems: 'center',
               justifyContent: 'center',
            }}
            >
              <Typography fontSize={22}>✏️ 마음 챙김 기록하기 </Typography>
            </View>
          </View>


          <Text style={{
            textAlign: 'center',
          }}>06/01 - ⏲️ 15:23 기준 건강 정보</Text>

          <ScrollView contentContainerStyle={{ display: "flex", flexWrap:"wrap", flexDirection:"row", justifyContent: "space-around" }}>
            <MainCard title={"👟 걸음 수"} content={ dailySteps ? dailySteps+" 걸음" : "10298 걸음" }></MainCard>
            <MainCard title={"🔥 활동 칼로리"} content={ dailySteps ? dailySteps+" Kcal" : "234 Kcal" }></MainCard>
            <MainCard title={"💤 수면  시간"} content={ dailySteps ? dailySteps+" 시간" : "7.3 시간" }></MainCard>
            <MainCard title={"😪 전날 취침 시각"} content={ dailySteps ? dailySteps+"" : "23:22" }></MainCard>
            <MainCard title={"♥️ 평균 심박수"} content={ dailySteps ? dailySteps+" bpm" : "92 bpm" }></MainCard>
            <MainCard title={"🩸 혈압"} content={ dailySteps ? dailySteps+"" : "85" }></MainCard>
            <MainCard title={"🍃 활성 산소"} content={ dailySteps ? dailySteps+" %" : "97 %" }></MainCard>
          </ScrollView>

          <NavigationBar>
            <TabIcon visibleBadge={false} iconName='stats-chart-outline' iconColor='white' />
            <TabIcon visibleBadge={false} iconName='home' iconColor='white' />
            <TabIcon visibleBadge={false} iconName='settings-outline' iconColor='white' />
          </NavigationBar>
        </ImageBackground>
    </View>
  )
}