import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { style } from "./headerStyle";
const Header = () => {
  return (
    <View style={[style.heading, style2.heading]}>
      <Text
        style={{ color: "white", fontWeight: "bold", backgroundColor: "green" }}
      >
        Heading 1
      </Text>
    </View>
  );
};
export default Header;

const style2 = StyleSheet.create({
  heading: {
    height: 500,
  },
});
// const style = StyleSheet.create({
//   heading: {
//     backgroundColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 100,
//   },
// });
