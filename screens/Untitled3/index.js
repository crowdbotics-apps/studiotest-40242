import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.fullName}>John Doe</Text>
        <Text style={styles.address}>123 Main St, Anytown USA</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Pressable onPress={() => {
        navigation.navigate("accountSettings");
      }}><Text style={styles.aboutMe}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod nisi, vel bibendum sapien. Sed euismod euismod nisi, vel
          bibendum sapien.
        </Text></Pressable>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address: {
    fontSize: 16,
    color: '#666'
  },
  body: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutMe: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default ProfileScreen;