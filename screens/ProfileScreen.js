import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

export default function ProfileScreen({navigation}){
    return(
        <View style={styles.page}>
              
  
              <View style={styles.head}> 
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Image source={require('../assets/arrow.png')}  
                style={{width:25, height:25}}
                /> 
                </TouchableOpacity>
                  
                <Text style={{fontSize:25,color:'white'}} >     Add Contact </Text>
                </View>
                <TouchableOpacity>
                <Image source={require('../assets/tick.png')}  
                style={{width:50, height:40}}
                />
                </TouchableOpacity> 
                </View>

                <View style={styles.top}>
                 <Image source={require('../assets/plain.png')}  
                    style={{width:55, height:56,borderRadius:30}}
                 /> 

                    <View style={{paddingLeft:30}}>
                        <View style={{borderBottomColor:'#0088cc',borderBottomWidth:2}}>
                        <TextInput 
                        placeholder='First name (required)'
                        style={{width:300,fontSize:24}}/>
                        </View>
                        <View style={{borderBottomColor:'#0088cc',borderBottomWidth:2}}>
                        <TextInput
                         placeholder='Last name (optional)'
                         style={{width:300,fontSize:24}}
                         />
                        </View>
                    </View>


                </View>
                <View style={{ paddingTop:30,paddingHorizontal:30}}>
                        <TouchableOpacity>
                        <View style={{borderBottomWidth:2,borderBottomColor:'#A2A2A2A2'}}>
                            <Text style={{fontSize:24}}>Ghana</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                        <View style={{borderBottomWidth:2,borderBottomColor:'#A2A2A2A2',paddingRight:10}}>
                            <Text style={{fontSize:24}}>+233</Text>
                        </View>
                        <View style={{paddingLeft:20}}>
                        <TextInput
                        
                        style={{fontSize:24,borderBottomColor:'#0088cc',borderBottomWidth:2,width:280}}/>
                        </View>
                        </View>
                 </View>



                
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    head:{
        paddingTop:18,
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#0088cc',
        alignItems:'center',
        height:85
       
     },
     top:{
         flexDirection:'row',
         alignItems:'center',
         paddingTop:20,
         paddingHorizontal:16
     }
});