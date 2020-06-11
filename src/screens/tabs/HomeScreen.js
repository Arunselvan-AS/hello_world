import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon:({TintColor})=>(<Icon name="person" style={{color:TintColor}}/>)
  }
    render() {
      return(
        <View >
          <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>PROFILE: </Text>
      <View style ={{flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",flex:1,backgroundColor:'white'}}>
        <Image
        style={{width: 100, height: 100,borderRadius:100,marginTop:50,marginLeft:5}}
        source={{uri: 'https://scontent.fmaa3-1.fna.fbcdn.net/v/t31.0-8/26233293_2026673197551632_3368118111048597947_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_oc=AQkjkGI4ySykYWMhnB-PtuBBQViBqRJUgT5NYYSAZsvbCq_rCN2lb5hiyaw5vxzcVRk&_nc_ht=scontent.fmaa3-1.fna&oh=2c007066e5645994dc3b23800637ed02&oe=5F06B1BA'}}
        />
        <View style= {{marginLeft:25,marginTop:50}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>Arunselvan AS</Text>
          <Text style={{fontSize:15,color:'black',fontWeight:'600'}}>B.Tech ECM 2nd Year</Text>
        </View>
        </View>
        </View>
      );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plain: {
      flex: 1,
    },
});