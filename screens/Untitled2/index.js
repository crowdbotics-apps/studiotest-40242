import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled4");
    }}><Image source={require('../assets/logo.png')} style={styles.logo} /></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});
export default SplashScreen;