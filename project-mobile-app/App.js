import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CompassScreen from './src/screens/CompassScreen';
import CameraScreen from './src/screens/CameraScreen';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/ProfileScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
      /* <Text>Open up App.js to start working on your app!</Text> */
      // {/* <StatusBar style="auto" /> */}
      /* <CompassScreen></CompassScreen> *}
    /* </View> */
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
       <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
       <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
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
