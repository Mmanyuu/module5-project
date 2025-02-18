import { CameraView, useCameraPermissions } from "expo-camera";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import * as MediaLibrary from "expo-media-library";
import { useState, useRef } from "react";

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button
          title="grant permission"
          onPress={() => {
            requestPermission();
          }}
        ></Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => {
      return current === "back" ? "front" : "back";
    });
  }

  async function takePhoto() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({});
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        alert("Photo saved to gallery!");
        navigation.navigate("Home");
      } catch (error) {
        alert("Failed to take photo");
      }
    }
  }

  // cameraRef.style =
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              toggleCameraFacing();
            }}
          >
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.photoButton}>
              <View style={styles.photoButtonInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
