import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity} from 'react-native';

const Button = (props) =>{
    return(
        <TouchableOpacity style={styles.button}
            onPress = {props.onPress}>
            <Text style={styles.buttonText} >
                { props.children }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   
    button:{
        backgroundColor: '#788eec',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 25,
        marginVertical: 10,
        //backgroundColor: 'rgb(42, 55, 68)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }, buttonText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export {Button};
