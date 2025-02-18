import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const imageUrls = [
  "https://images.unsplash.com/photo-1508614999368-9260051292e5",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
  // Add more URLs as needed
];

export default function HomeScreen({ route, navigation }) {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [imageBackground, setImageBackground] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [profileId, setProfileId] = useState(null); // Declare profileId in state

  useEffect(() => {
    if (route.params?.profilePic && route.params?.name) {
      setProfilePic(route.params.profilePic);
      setName(route.params.name);
    }
  }, [route.params]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageBackground(imageUrls[randomIndex]);
  }, []);


const pickImage = async () => {
  // This is the point of entry to the profile screen page
  // Request permission to access media library
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission Denied', 'We need access to your photo library to proceed.');
    return;
  }
  if (!name) {
    Alert.alert('Name Required', 'Please enter your name before uploading a profile picture.');
    return;
  }

  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setProfilePic(uri);
    //   const id = uuidv4(); // Generate a unique profile ID
    //   const profile = {
        // id,
        // name,
        // profilePic: uri,
        // dateCreated: currentDate,
    //   };
    //   await AsyncStorage.setItem(id, JSON.stringify(profile));
    //   setProfileId(id); // Set profileId in state
    //   navigation.navigate('Profile', { profileId: id });
    await AsyncStorage.clear();
    await AsyncStorage.setItem("profilePic", uri); // Store the image UR
    navigation.navigate("Profile", { profilePic: uri, name });
    }
  } catch (error) {
    Alert.alert('Error', 'Failed to pick image');
  }
};


  return (
    <ImageBackground source={{ uri: imageBackground }} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Captured Moments</Text>
        <Text style={styles.title}>🏩 🏖 🛫 🥗 🎁</Text>
        <Text style={styles.subtitle}>Please create a profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Camera")}
          >
            <Text style={styles.buttonText}>Click Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
        {profilePic && (
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => navigation.navigate("Profile", { profilePic ,name})}
          >
            <Text style={styles.profileName}>{name}'s Profile</Text>
            <Image source={{ uri: profilePic }} style={styles.profileImage} />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
