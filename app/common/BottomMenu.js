import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    menu:{
        flex: 1,
        flexDirection: 'row',
        alignItems : 'center',    
    },button:{
        flex:1,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: 'white',
        padding: 5,
        paddingBottom:0,
        borderColor: 'black',
        borderWidth: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        alignItems : 'center',
    }
});



const MenuItem = (props) =>{
    return(
            <TouchableOpacity style={styles.button}
                onPress = {props.onPress}>
                {props.children}
                
            </TouchableOpacity>
        
    );
}


class BottomMenu  extends Component {
    render(){
        return (
            <View style={styles.menu}>
                {(this.props.add) &&
                    <MenuItem onPress={() =>{
                        this.props.navigation.navigate('NewEntry')
                    } }> 
                        <Image source={require('../assets/addIcon.png')}/>
                    </MenuItem>}
                    
                    {(this.props.edit) &&
                        <MenuItem onPress={()=>{
                            this.props.navigation.navigate('NewEntry')
                        }}>
                            <Image source={require('../assets/editIcon.png')}/>
                        </MenuItem>}
                    {(this.props.aboutUs) &&
                        <MenuItem onPress={() =>{
                            this.props.navigation.navigate('Info')}}>
                            <Image source={require('../assets/aboutUsIcon.png')}/>
                        </MenuItem>}
            </View>
        );
    }
};


  
  export default BottomMenu;