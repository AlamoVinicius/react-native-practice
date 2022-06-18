import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";

import infoContext from "../../../context";

import axios from "axios";

import { Badge } from "@rneui/themed";
import { isLoading } from "expo-font";

//https://randomuser.me/api/?page=3&results=10&seed=abc

export default FlatListScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setBadgeValue } = useContext(infoContext);
  const [currentPage, setCurrentPage] = useState(1);
  let qtde = users.length
  const getUsers = async () => {
    setLoading(true);
    try {
      const usersapi = await axios.get(
        `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`
      );
      setUsers([...users, ...usersapi.data.results]);
      qtde += usersapi.data.results.length
      setBadgeValue(qtde); // atualiza o badget do pai conforme atualização
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const renderLoader = () => {
    return  (loading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    : null) ;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImage} source={{ uri: item.picture.large }} />
        <View style={styles.contentWrapper}>
          <Text
            style={styles.textName}
          >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.textEmail}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {users && (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.1}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  contentWrapper: {
    justifyContent: "space-around",
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textEmail: {
    color: "#777",
  },
  loader: {
    marginVertical: 16,
    alignItems: "center",
  },
});
