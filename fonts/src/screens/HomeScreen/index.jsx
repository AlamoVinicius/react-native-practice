import React from "react-native"
import {View, Text, Button} from "react-native"



export default HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to FlatList"
          onPress={() => navigation.navigate("FlatListscreen")}
        />
      </View>
    );
  }