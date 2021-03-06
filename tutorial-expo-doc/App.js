import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { Platform } from "expo-modules-core";


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to acess camera roll as required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let OpenShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri); // funçoes da lib expo-sharin de acordo com o tutorial , react native n tem uma opção nativa
  };

  if (selectedImage) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity style={styles.button} onPress={OpenShareDialogAsync}>
          <Text>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    marginTop: 10,
    width: "95%",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

/* obs do estudo: Apesar do tutorial oficial apresentado na doc dizer que devo especificar a lagura e altura da imagem, de acordo com os meus testes não é realmente necessário para a imagem ser inserida dentro da minha view

- posso ultilizar no local da uri um link da web por exemplo: https://i.imgur.com/TkIrScD.png
- tutorial finalizado em um arquivo obs a serem analisadas: 
    - separar style, funçoes e childs? 
    - verificar libs como style components
    - acessibilidades
    - build and deploy?
 */
