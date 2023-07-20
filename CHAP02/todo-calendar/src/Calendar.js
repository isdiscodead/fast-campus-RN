import React, {useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import dayjs from "dayjs";
import { styles } from "../App";

import { getDayColor, getDayText } from "./util";

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true);
const columnSize = 35;

export const Column = ({ text, color, opacity, disabled, isSelected, onPress }) => {
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

export default ({
  selectedDate,
  onPressLeftArrow,
  onPressRightArrow,
  onPressHeaderDate,
  onPressDate,
  columns,
}) => {
  const ListHeaderComponent = ({ now }) => {
    const currentDateText = dayjs(now).format("YYYY.MM.DD.");

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow} />
          <TouchableOpacity onPress={onPressDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton iconName="arrow-right" onPress={onPressRightArrow} />
        </View>

        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            return (
              <Column
                key={`day - ${day}`}
                disabled={true}
                text={getDayText(day)}
                color={getDayColor(day)}
                opacity={1}
              />
            );
          })}
        </View>
      </View>
    );
  };

  useEffect(() => {
    console.log("date clicked");
  }, [selectedDate]);

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

    const isSelected = dayjs(date).isSame(selectedDate);

    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPressDate}
        isSelected={isSelected}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      scrollEnabled={false}
      contentContainerStyle={{ paddingTop: statusBarHeight }}
      data={columns}
      keyExtractor={(_, idx) => `column - ${idx}`}
      numColumns={7}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
