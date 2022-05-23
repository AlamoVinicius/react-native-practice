import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={() => alert('Hello World')}
      style={styles.button}>
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
    height:159,
    marginBottom:10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    width: '95%',
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});

/* obs do estudo: Apesar do tutorial oficial apresentado na doc dizer que devo especificar a lagura e altura da imagem, de acordo com os meus testes não é realmente necessário para a imagem ser inserida dentro da minha view

- posso ultilizar no local da uri um link da web por exemplo: https://i.imgur.com/TkIrScD.png
 */
