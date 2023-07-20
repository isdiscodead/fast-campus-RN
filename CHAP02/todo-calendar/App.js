// react
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

// lib
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// hooks
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import { useCalendar } from './src/hook/use-calendar';
import { useTodoList } from './src/hook/use-todo-list';


const statusBarHeight = getStatusBarHeight(true);

const columnSize = 35;

const Column = ({ text, color, opacity, disabled, isSelected }) => {
  return (
    <TouchableOpacity 
      disabled={disabled} 
      onPress={onPress}
      style={{ width: columnSize, height: columnSize, 
      borderRadius: columnSize / 2,
      backgroundColor: isSelected ? "#00000020" : "transparent",
      justifyContent: "center", alignItems: "center" }}
    > 
      <Text style={{ color, opacity }} >
        { text }
      </Text>
    </TouchableOpacity>
  )
}

const ArrowButton = ({ iconName, onPress }) => {
  <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
    <SimpleLineIcons iconName={iconName} size={18} color="#404040" onPress={onPress}/>
  </TouchableOpacity>
}


export default function App() {

  const now = dayjs();
  const {  
    selectedDate, 
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
    setSelectedDate,
  } = useCalendar(now);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressRightArrow = add1Month;


  const {} = useTodoList(selectedDate);

  const ListHeaderComponent = () => {

    const currentDateText = dayjs(now).format("YYYY.MM.DD.");

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: "center" , alignItems: "center" }}>
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow}/>
          <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontSize: 20, color: "#404040" }} >{ currentDateText }</Text>
          </TouchableOpacity>
          <ArrowButton iconName="arrow-right" onPress={onPressRightArrow}/>
        </View>

        <View style={{ flexDirection: 'row' }}>
          {
            [0, 1, 2, 3, 4, 5, 6].map(day => {
              return (
                <Column key={`day - ${day}`} 
                  disabled={true}
                  text={ getDayText(day) } 
                  color={ getDayColor(day) } 
                  opacity={1}
                />
              )
            })
          }
        </View>
      </View>
    ) 
  }

  useEffect(() => {
    console.log("date clicked");
  }, [selectedDate])
  

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get('date');
    const day =dayjs(date).get('day');
    const color = day === 0 ? "#e67639" : day === 6 ? "#5872d1" : '#2b2b2b';
    const isCurrentMonth = dayjs(date).isSame(now, "month");

    const isSelected = dayjs(date).isSame(selectedDate);

    const onPress = () => {
      setSelectedDate(date);
    }

    return ( 
      <Column text={dateText} 
        color={color}  
        opacity={ isCurrentMonth ? 1 : 0.4 } 
        onPress={onPress}
        isSelected={isSelected}
      />
    )
  }


  return (
    <View>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/white-crumpled-paper-texture-background_1373-162.jpg'
        }}
        style={{
          width: "100%",
          height: "100%",
          position: 'absolute',
        }}
      />

      <FlatList 
        style={ styles.container }
        contentContainerStyle={{ paddingTop: statusBarHeight }}
        data={ columns }
        keyExtractor={(_, idx) => `column - ${idx}`}
        numColumns={ 7 }
        renderItem={ renderItem }  
        ListHeaderComponent={ ListHeaderComponent } 
      />

      <FlatList 
        data={ todoList }
      />
      
      <DateTimePickerModal 
        isVisible={ isDatePickerVisible }
        mode="date"
        onConfirm={ handleConfirm }
        onCancel={ hideDatePicker }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
