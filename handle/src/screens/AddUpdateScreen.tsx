import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { Header } from '../components/Header/Header';
import { useRootNavigation } from '../navigations/RootNavigation';
import { Background } from '../components/Background';
import AddFile from '../components/AddUpdate/AddFile';
import AddStress from '../components/AddUpdate/AddStress';
import AddButtons from '../components/AddUpdate/AddButtons';
import { ElectrocardiogramSampleValue } from 'react-native-health';
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health';
import dayjs from 'dayjs';

export const AddUpdateScreen: React.FC = () => {
  const navigation = useRootNavigation();
  var [ECG, setECG] = useState<ElectrocardiogramSampleValue>();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      /* Permission options */
      const permissions = {
        permissions: {
          read: [AppleHealthKit.Constants.Permissions.Electrocardiogram],
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

            // TODO: 이거 계산 안 돼있네...
          },
        );
      });
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Background>
        <View style={{ flex: 1 }}>
          <Header>
            <Header.Title title="기록 추가하기" />
            <Header.Icon
              iconName="close"
              onPress={() => {
                navigation.pop();
              }}
            />
          </Header>
          <AddFile ecg={ECG} />
          <AddStress />
          <AddButtons />
        </View>
      </Background>
    </View>
  );
};
