import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

export default function home() {
  return (
    <View style={styles.container}>
      <Header name="Álamo Developer"/>
      <Text>Testeeee  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
