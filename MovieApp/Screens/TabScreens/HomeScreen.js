import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
 
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>HomeScreen</Text>
        <Button
          title="Go to MovieDetailScreen"
          onPress={() => navigation.navigate('MovieDetailScreen')}
        />
      </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 40,
  },
});
