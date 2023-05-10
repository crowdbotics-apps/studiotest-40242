import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfilePictureScreen = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleChoosePhoto = () => {// code to choose photo from gallery or camera
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Upload Profile Picture</Text>
      <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
        {profilePicture ? <Image source={{
        uri: profilePicture
      }} style={styles.photo} /> : <Text style={styles.photoPlaceholder}>Choose Photo</Text>}
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  photoPlaceholder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555'
  }
});
export default ProfilePictureScreen;