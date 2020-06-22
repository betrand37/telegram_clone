import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image ,ScrollView} from 'react-native';

export default function ChatScreen({navigation}){

    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = ( ) => {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    };

    return(
        <View style={styles.page}>
            <View style={styles.head}> 
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/arrow.png')}  
                style={{width:25, height:30}}
                /> 
                </TouchableOpacity>

                <View style={{paddingLeft:20}}>
                    <Image source={require('../assets/Bm.jpg')}  
                    style={{width:40, height:40,borderRadius:20}}
                    /> 
                </View>
                 <View style={{justifyContent:'center',alignItems:'center',paddingLeft:10}}>
                <Text style={{fontSize:20,color:'white'}} > BB </Text>
                <Text style={{fontSize:15,color:'white'}} > Online </Text>
                </View> 
                </View>
                <Image source={require('../assets/dots.png')}  
                style={{width:30, height:30}}
                /> 
            </View>


            <ScrollView>
             {courseGoals.map((goal) => <View style={styles.entered}><Text key={goal} style={{textAlign:'left',fontSize:19}}>   {goal}</Text></View>)}
            </ScrollView>


            <View style={styles.down}>
                

                
                    <Image source={require('../assets/emoj.jpg')}  
                    style={{width:25, height:25,borderRadius:20}}
                    />
                <View style={{paddingHorizontal:5}}>
                    <TextInput
                    placeholder="Message"
                    style={{width:320,fontSize:20}}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                </View>
                
                <TouchableOpacity onPress={addGoalHandler}>
                <Image source={require('../assets/sb.png')}  
                    style={{width:30, height:30,borderRadius:30}}
                    />
                </TouchableOpacity> 

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'#A2A2A2',
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
      down:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        height:50,
        width:'100%',
        position:'absolute',
        bottom:0
    },
    entered:{
        backgroundColor:'#adff2f',
        height:35,
        marginLeft:100,
        paddingRight:10,
        width:300,
        borderRadius:10,
        marginVertical:5,
        justifyContent:'center'

    }
});