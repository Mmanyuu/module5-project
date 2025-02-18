// Importing the Modules
import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { CalendarList } from "react-native-calendars";
// import Day from "react-native-calendars/src/calendar/day/basic";

const App = () => {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <CalendarList
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={3}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={3}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
