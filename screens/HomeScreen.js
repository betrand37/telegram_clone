import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,ScrollView} from 'react-native';




export default function HomeScreen({navigation}) {
    return (
        <View style={{backgroundColor:'white'}} >


          <View style={styles.head}> 
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={require('../assets/three.png')}  
                style={{width:25, height:25}}
                /> 
                </TouchableOpacity>
                  
                <Text style={{fontSize:25,color:'white'}} >   Telegram </Text>
                </View>
                <Image source={require('../assets/sea.png')}  
                style={{width:30, height:30,borderRadius:50}}
                /> 

      
          </View>

          
        <ScrollView>
            <View>  
                <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>   
                  <View style={styles.display}>
                  <Image source={require('../assets/circle.png')}  
                        style={{width:38, height:38}}
                  /> 
                  <View style={styles.content}>
                  <Text style={{fontSize:19}}>  Bernard</Text> 
                  <Text style={styles.message}>  See all things about your project,stuff,...</Text>
                  </View>
                  <View style={{justifyContent:'space-between',paddingLeft:68}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:53</Text></View>
                        <View style={{backgroundColor:'#A2A2A2',borderRadius:10,alignItems:'center'}}><Text> 2 </Text></View> 
                  </View>
                  </View>

                  </TouchableOpacity>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            <View>
                     <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                        <View style={styles.display}>
                        <Image source={require('../assets/Bet.jpg')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  Betrand</Text> 
                        <Text style={styles.message}>   What's up</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:240}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:40</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                        </View>
                        </View>
                  
                        </TouchableOpacity >  
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                        <Image source={require('../assets/Bm.jpg')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  BB</Text> 
                        <Text style={styles.message}>   I'm fine and you?</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:200}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:30</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                        </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                        <View style={styles.display}>
                        <Image source={require('../assets/Tot.jpg')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  NDB</Text> 
                        <Text style={styles.message}>   i've missed you</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:210}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:40</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 3 </Text></View> 
                        </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                  <View style={styles.display}>
                  <Image source={require('../assets/Link.png')}  
                        style={{width:38, height:38}}
                  /> 
                  <View style={styles.content}>
                  <Text style={{fontSize:19}}>  Lemuel</Text> 
                  <Text style={styles.message}>   Bro how far?</Text>
                  
                  </View>
                  <View style={{justifyContent:'space-between',paddingLeft:227}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
            </View>
                  </View>
            </TouchableOpacity>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                        <Image source={require('../assets/bbg.jpg')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  Jt</Text> 
                        <Text style={styles.message}>   Hi b</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:273}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                  </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                  <Image source={require('../assets/Link.png')}  
                        style={{width:38, height:38}}
                  /> 
                  <View style={styles.content}>
                  <Text style={{fontSize:19}}>  Lingz</Text> 
                  <Text style={styles.message}>  Come home!!!</Text>
                  
                  </View>
                  <View style={{justifyContent:'space-between',paddingLeft:220}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                  </View>
                  </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                        <Image source={require('../assets/lock.png')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  Bro</Text> 
                        <Text style={styles.message}>   Yo kobby cook rice give me i dey come house </Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:25}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                  </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                        <Image source={require('../assets/Bet.jpg')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  NO Dey Bed</Text> 
                        <Text style={styles.message}>   Bomber</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:217}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                        </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
      

            
            <View>
                        <View style={styles.display}>
                        <Image source={require('../assets/proftwo.png')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  Richard</Text> 
                        <Text style={styles.message}>   Adey You?</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:233}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                        </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>

            
            <View>
                  <View style={styles.display}>
                        <Image source={require('../assets/star.png')}  
                              style={{width:40, height:41,borderRadius:20}}
                        /> 
                        <View style={styles.content}>
                        <Text style={{fontSize:19}}>  Daniel</Text> 
                        <Text style={styles.message}>   Small small the hustle go pay ,i swear</Text>
                        
                        </View>
                        <View style={{justifyContent:'space-between',paddingLeft:70}}>
                        <View><Text style={{color:'#A2A2A2'}}>22:10</Text></View>
                        <View style={{backgroundColor:'green',borderRadius:30,alignItems:'center'}}><Text> 1 </Text></View> 
                  </View>
                        </View>
                  <View style={{flex: 1, height: 1,backgroundColor: '#A2A2A2A2',marginLeft:58}} />
            </View>




            <View style={styles.add}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Image source={require('../assets/change.jpg')}  
            style={{width:60, height:60}}
            /> 
            </TouchableOpacity>
            </View>
            
        </ScrollView>
        </View>
    );
  };


  const styles = StyleSheet.create({
   
   head:{
     paddingTop:18,
     justifyContent:'space-between',
     flexDirection:'row',
     backgroundColor:'#0088cc',
     alignItems:'center',
     height:85
    
   },

   add:{
       flex:1,
       flexDirection:'row',
       justifyContent:'flex-end',
       marginTop:20
       
   },
   display:{
     
     height:60,
     paddingLeft:10,
     alignItems:'center',
     flexDirection:'row',
     backgroundColor:'white'
     
   },
   content:{
      justifyContent:'space-between',
      paddingLeft:5

   },
   message:{
      fontSize:16 ,
      color:'#0088cc',
      
   }

 })      