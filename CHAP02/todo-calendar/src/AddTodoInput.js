import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { bottomSpace, ITEM_WIDTH } from "./util";

export const AddTodoInput = ({ value, onChangeInput, placeholder, onPressAdd }) => {
  return (
    <View
      style={{ marginBottom: bottomSpace, flexDirection: "row", width: 220 }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeInput}
        style={{ flex: 1, padding: 5, paddingBottom: 7 }}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={{onPressAdd}} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};
