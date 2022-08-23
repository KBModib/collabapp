import * as React from 'react';
import { Text, View } from 'react-native';
import Cards from '../components/Cards';
import Button from '../components/Button';

export default function HomeScreen() {
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.heading}>Explore</Text>
        <Cards />
        <Button />
      </View>
    );
  }

  const styles = {
    homeScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    heading: {
      fontSize: 45,
      textAlign: 'center',
      marginTop: 50,
    },
  };
