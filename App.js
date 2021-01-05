import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <View style={{flex:1 ,backgroundColor:'#daf5e1', justifyContent:'center' }}>
         <TextInput 
         style={{
           alignSelf:'center',
           alignContent:'center',
            borderWidth:1,
             borderColor:'gray' ,
             width:'80%',
              height:'7%', 
              borderRadius:20
            }}
         placeholder="Enter Number"
         placeholderTextColor='gray'
          keyboardType='numeric'
          

          // onChangeText={}
          // value={}
          />
  <View  >
  <TouchableHighlight 
          onPress={()=>{alert('clicked')}} 
         
          style={{ 
            top:15,
             alignSelf:'center',
          borderWidth:0, 
          borderRadius:20, 
          alignItems:'center',
   alignContent:'center',
   justifyContent:'center',
    width:120,
    height:40,
    backgroundColor:'lightgreen'
  }}
           >
             <Text style={{fontWeight:'bold'}}>Submit</Text>
           </TouchableHighlight>
  </View>
          
      </View>
    )
    // <WebView source={{ uri: 'https://api.whatsapp.com' }} />;
  }
}


export default App;
