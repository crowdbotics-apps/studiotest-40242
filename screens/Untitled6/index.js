import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled7");
      }}><Image source={{
          uri: 'https://via.placeholder.com/150'
        }} style={styles.profileImage} /></Pressable>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.address}>123 Main St, Anytown USA</Text>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, velit vel bibendum bibendum, elit sapien bibendum
          sapien, vel bibendum sapien sapien vel sapien.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  address: {
    fontSize: 18,
    marginBottom: 10
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20
  }
});
export default ProfileScreen;