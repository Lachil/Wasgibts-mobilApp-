import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {getAllEntries} from './redux'

import {TOKEN} from './redux'
import {BottomMenu, Entry} from './common';


const styles = StyleSheet.create({
    menu:{
        position: 'absolute',
        bottom:0,
        width: '100%',
    }, container:{
        flex: 1
    }
});

class Home  extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: []
        };
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            this.setState({'data' : nextProps.data});
        }
      }
    

    componentDidMount() {
        console.log('componentDidMount: screen viewed');
        this.props.getAllEntries();
    }   

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick = () => {
        return true;
    };

    componentDidUpdate(){
        console.log('componentDidUpdate: screen viewed');
    }


    renderItem = ({ item }) => (
        <Entry entry = {item}  navigation={this.props.navigation}></Entry>    
    );
    
    render(){
        return (
            
            <View style={styles.container}>
                {(this.props.loading) && <Text>loading ...</Text>}
                {(this.state.data.length > 0) && <FlatList 
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}      
                    />
                }
                
                <View style = {styles.menu}>
                    <BottomMenu navigation={this.props.navigation} add={true} edit={true} info={true}></BottomMenu>
                </View>
            </View>
        );
    }
};

const mapStateToProps = state => {
    return {
        error: state.entries.error,
        loading: state.entries.loading,
        data: state.entries.data
    }
    }
  
  export default connect(mapStateToProps, {getAllEntries})(Home);