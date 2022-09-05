import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


export default function Button() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="refresh" size={50} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="emoticon" size={50} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="emoticon-sad" size={50} color="red" />
        </TouchableOpacity>
      </View>
    );
  }

    const styles = {
    container: {
        flex: 1,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        marginBottom: -95,
    },
};