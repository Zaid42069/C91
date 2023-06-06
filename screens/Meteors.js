import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native-web';

export default class MeteorScreen extends Component {

    constructor(props){
 super(props)
 this.state ={
meteors:{},
 }
    }

    getMeteors = ()=>{
   axios
     .get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-06-06&end_date=2023-06-13&api_key=8XDPcV7GRSIVxKfrAy8zqCj23xeUUyo3uCdly0Gr")
     .then(response=>{
        this.setState({meteors:response.date.near_earth_objects})
        console.log(Object.keys(this.state.meteors))
     })
     .catch(error=>{
        Alert.alert(error.message)
     })
    }




    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}