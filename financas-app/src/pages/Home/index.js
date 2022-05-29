import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

// simulação lista vinda do backend.
const list = [
  {
    id: 1,
    label: "Boleto 1",
    value: "300,90",
    date: "06/05/2022",
    type: 0, //  0 poderia ser algo como uma despesa
  },
  {
    id: 2,
    label: "Pagamento do cliente Álamo",
    value: "1.300,90",
    date: "08/05/2022",
    type: 1, // 1=> receita
  },
  {
    id: 3,
    label: "salário",
    value: "5.300,90",
    date: "10/05/2022",
    type: 1, // 1=> receita
  },
];

export default function home() {
  return (
    <View style={styles.container}>
      <Header name="Álamo developer" />
      <Balance balance="8.324,90" expense="-2.323,85" />
      <Actions />
      <Text style={styles.title}>Ultimas transações</Text>
      <FlatList
        style={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
        keyExtractor={(item) => String(item.id)} // flatlist necessita formato string?
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
