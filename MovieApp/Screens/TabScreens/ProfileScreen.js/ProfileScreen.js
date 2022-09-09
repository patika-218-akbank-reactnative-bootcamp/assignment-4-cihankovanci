import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
 
} from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <Text>ProfileScreen</Text>
        <Button
          title="Go to ThemeScreen"
          onPress={() => navigation.navigate('ThemeScreen')}
        />
        <Button
          title="Go to ProfileEditScreen"
          onPress={() => navigation.navigate('ProfileEditScreen')}
        />
      </SafeAreaView>
    );
  };

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 40,
  },
});
