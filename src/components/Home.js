import React from 'react'
import { View, Text, ScrollView ,StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Dashboard = () => {
    

  return (
    <ScrollView style = {styles.container}>
        <View style = {styles.topbar}>
            
        </View>

    {/* text after the topbar */}
        <Text style = {styles.head_text}> Hi Arunuday</Text> 
        <Text style = {styles.text1}> Welcome back ready for your next lesson ?</Text>


        {/* all the subject to learn */}
        <Text style = {styles.text2}>Subject</Text>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={ false }>
            <View style = {styles.all_btn}>

                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject1</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject2</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject3</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject4</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        
        {/* new course recomendation */}

        <Text style = {styles.text3}>What To Learn Next ?</Text>
        <Text style = {styles.text2}>Recommended for you..</Text>

        <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={ false }>
            <View style = {styles.all_btn2}>

            <TouchableOpacity style = {styles.btn2}>
                    <Text style = {styles.btn_text2}>Course 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn2}>
                    <Text style = {styles.btn_text2}>Course 2 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn2}>
                    <Text style = {styles.btn_text2}>Course 3 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn2}>
                    <Text style = {styles.btn_text2}>Course 4 </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        
    </ScrollView>
  )
}

export default Dashboard


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffefdd', 
    },
    topbar:{
        height: hp('15%'),
        width: wp('100%'),
        backgroundColor: 'blue',
        
       
        
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // marginTop: 10
    },
    head_text:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#27548A',
        marginLeft: 10,
    },
    text1:{
        fontSize: 15,
        color: '#27548A',
        marginTop: 5,
        marginLeft: 15,
    },
    text2:{
        fontSize: 20,
        color: '#183B4E',
        marginTop: 10,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    text3:{
        fontSize: 33,
        color: '#183B4E',
        marginTop: 15,
        marginLeft: 16,
        fontWeight: 'bold',
    },

    //all subject buttons
    all_btn: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#A9B5DF',
        height: hp('17%'),
        width: wp('60%'),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,

    },
    btn_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },



    // new course recomendation
    all_btn2: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    btn2: {
        backgroundColor: '#C890A7',
        height: hp('25%'),
        width: wp('75%'),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,

    },
    btn_text2: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    
})