import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';


export  function DrawerContent(props) {
    return(
        <View style={{backgroundColor:'white'}}> 
            <View style={styles.head}>
                <View style={styles.top}>
                 <Image source={require('../assets/Tot.jpg')}  
                    style={{width:65, height:66,borderRadius:30}}
                 /> 

                <TouchableOpacity >
                <Image source={require('../assets/moon.png')}  
                style={{width:45, height:45}}
                /> 
                </TouchableOpacity>
                </View>
                <View style={styles.down}>
                    <View style={{justifyContent:'space-between'}}>
                     <Text style={{color:'white',fontWeight:'bold', fontSize:17}}>Betrand</Text>
                     <Text style={{color:'white'}}>+233 264774091</Text>
                    </View>
                    <TouchableOpacity>
                    <Image source={require('../assets/drop.png')}  
                    style={{width:20, height:20}}
                    /> 
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.menu}>
             
                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingTop:20}}>
                  <Image source={require('../assets/proftwo.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       New Group</Text> 
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:30}}>
                  <Image source={require('../assets/lock.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       New Secret Chat</Text> 
                    </View>
                </TouchableOpacity>
              

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingBottom:30}}>
                  <Image source={require('../assets/bot.jpg')}  
                        style={{width:22, height:22,borderRadius:30}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       New Channel</Text> 
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingBottom:30}}>
                  <Image source={require('../assets/contact.jpg')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Contacts</Text> 
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingBottom:30}}>
                  <Image source={require('../assets/phone.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Calls</Text> 
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingBottom:30}}>
                  <Image source={require('../assets/book.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Saved Messages</Text> 
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingBottom:30}}>
                  <Image source={require('../assets/setting.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Settings</Text> 
                    </View>
                </TouchableOpacity>
              

                
            </View>

            <View style={{borderBottomWidth:1,borderBottomColor:'#A2A2A2A2'}}/>
            
            <View style={styles.menu}>
            <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingTop:20}}>
                  <Image source={require('../assets/profp.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Invite Friends</Text> 
                    </View>
             </TouchableOpacity>


             <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:30}}>
                  <Image source={require('../assets/quest.png')}  
                        style={{width:20, height:20}}
                    /> 
               
                    
                    <Text style={{fontSize:20}}>       Telegram FAQ</Text> 
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles=StyleSheet.create ({
    head:{
        backgroundColor:'#0088cc',
        height:180
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:44,
        paddingHorizontal:16
    },
    down:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:28,
        paddingHorizontal:16 
    },
    menu:{
        justifyContent:'space-around',
        paddingLeft:18,
        
    }
})

