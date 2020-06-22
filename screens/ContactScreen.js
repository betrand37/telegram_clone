import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView } from 'react-native';

export default function ContactScreen({navigation}){
    return(
        <View style={styles.page}>
            <View style={styles.head}> 
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/arrow.png')}  
                style={{width:25, height:25}}
                /> 
                </TouchableOpacity>
                  
                <Text style={{fontSize:25,color:'white'}} >     New Message </Text>
                </View>
                <Image source={require('../assets/sea.png')}  
                style={{width:30, height:30,borderRadius:50}}
                /> 
            </View>

            <ScrollView>

            
            

            <View style={styles.display}>
            <Image source={require('../assets/proftwo.png')}  
                  style={{width:20, height:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:20}}>       New Group</Text> 
            
            </View>
            
            </View>

            <View style={styles.display}>
            <Image source={require('../assets/lock.png')}  
                  style={{width:20, height:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:20}}>       New Secret Chat</Text> 
            
            </View>
            
            </View>

            <View style={styles.display}>
            <Image source={require('../assets/bot.jpg')}  
                  style={{width:22, height:22,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:20}}>       New Channel</Text> 
            
            </View>
            
            </View>

            <View style={{backgroundColor:'#fafafa',height:25,justifyContent:'center'}}> 
                <Text >      Sorted by Last seen time</Text>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
            <View style={styles.last}>
            <Image source={require('../assets/Bm.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  BB</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
            <View style={styles.last}>
            <Image source={require('../assets/Tot.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Nyarko</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
            <View style={styles.last}>
            <Image source={require('../assets/bbg.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Jk</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>
            </TouchableOpacity>

            <View style={styles.last}>
            <Image source={require('../assets/Link.png')}  
                  style={{width:40, height:41}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Lemuel</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>

            <View style={styles.last}>
            <Image source={require('../assets/Bet.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Betrand</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>

            <View style={styles.last}>
            <Image source={require('../assets/Link.png')}  
                  style={{width:40, height:41}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Lemuel</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>

            <View style={styles.last}>
            <Image source={require('../assets/Bm.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  BB</Text> 
            <Text style={styles.message}>  online</Text>
            
            </View>
            </View>

            <View style={styles.last}>
            <Image source={require('../assets/Tot.jpg')}  
                  style={{width:40, height:41,borderRadius:20}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  NDB</Text> 
            <Text style={styles.offline}>  Last Seen at 17:54</Text>
            
            </View>
            </View>

            <View style={styles.last}>
            <Image source={require('../assets/circle.png')}  
                  style={{width:40, height:41}}
            /> 
            <View style={styles.content}>
            <Text style={{fontSize:21}}>  Bet</Text> 
            <Text style={styles.offline}>  Last Seen at 16:02</Text>
            
            </View>
            </View>


            <View style={styles.add}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/add.jpeg')}  
                style={{width:60, height:60}}
                /> 
                </TouchableOpacity>
            </View>

            </ScrollView>
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
      display:{
        
        height:45,
        paddingLeft:18,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'
        
      },
      content:{
         justifyContent:'space-between',
         paddingLeft:5
   
      },
      last:{
        height:60,
        paddingLeft:10,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'
      },
      message:{
        fontSize:16 ,
        color:'#0088cc'
     },
     offline:{
        fontSize:16 ,
        color:'#A2A2A2'
     },
     add:{
            flex:1,
            flexDirection:'row',
            justifyContent:'flex-end',
            marginTop:18,
            paddingRight:8
     }
});