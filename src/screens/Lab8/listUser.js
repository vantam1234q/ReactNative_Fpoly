/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TextInput,TouchableOpacity,View,} from "react-native";
import { styles } from "./styles";

const ListUser = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getAPI = async () => {
    const url = "https://65d5ababf6967ba8e3bc2bbb.mockapi.io/user"
    try {
      let response = await fetch(url);
      let result = await response.json();
      if (response.ok) {
        setData(result);
        console.warn(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    const url = "https://65d5ababf6967ba8e3bc2bbb.mockapi.io/user"
    try {
      let response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      let result = await response.json();
      if (response.ok) {
        getAPI();
      } else {
        console.warn("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = (userData) => {
    setOpenDialog(true);
    setSelectedUser(userData);
    console.log("Update");
  };

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getAPI();
    });
    return focusHandler;
  }, [navigation]);

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={() => navigation.navigate("addUser")}
      >
        <Text style={styles.buttonText}>Add New</Text>
      </TouchableOpacity>
      {data.length ? (
        data.map((item, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.containerText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.birthday}>{item.birthday}</Text>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => handleUpdate(item)}
                >
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => handleDelete(item.id)}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : null}
      <Modal visible={openDialog} transparent={true}>
        <UpdateModel
          setOpenDialog={setOpenDialog}
          selectedUser={selectedUser}
          getAPI={getAPI}
        />
      </Modal>
    </ScrollView>
  );
};

const UpdateModel = (props) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setBirthday(props.selectedUser.birthday);
    }
  }, [props.selectedUser]);

  const updateUser = async () => {
    const url = "https://65d5ababf6967ba8e3bc2bbb.mockapi.io/user"
    const id = props.selectedUser.id;
    try {
      let result = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, birthday }),
      });
      result = await result.json();
      if (result) {
        props.getAPI();
        props.setOpenDialog(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <View style={styles.modelContent}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <View style={styles.birthday}>
        <TouchableOpacity style={styles.button} onPress={updateUser}>
          <Text style={styles.buttonText}> Update </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => props.setOpenDialog(false)}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListUser;