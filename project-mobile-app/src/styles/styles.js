import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "stretch",
  },
  launchButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
  },
  launchButtonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  selectedImage: {
    width: windowWidth - 40,
    height: windowWidth - 40,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  photoButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
});
