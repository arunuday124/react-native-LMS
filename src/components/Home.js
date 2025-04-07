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

                <TouchableOpacity>
                    <View style ={ styles.subject}>
                        <Image
                            source={require('../assets/reactjs.png')}
                            style={styles.subject_image}
                        />
                        <Text style = {styles.subject_text}>React Js</Text>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity>
                    <View style ={ styles.subject}>
                        <Image
                            source={require('../assets/reactnative.png')}
                            style={styles.subject_image}
                        />
                        <Text style = {styles.subject_text}>React Native</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject3</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btn_text}>Subject4</Text>
                </TouchableOpacity> */}

            </View>
        </ScrollView>
        
        {/* new course recomendation */}

        <Text style = {styles.text3}>What To Learn Next ?</Text>
        <Text style = {styles.text2}>Recommended for you..</Text>

        <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={ false }>
            <View style = {styles.all_btn2}>

                <TouchableOpacity >
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/webdev.png')}
                            style={styles.image}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>Web Development</Text>
                                  
                            <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                            <Text style={styles.money}>price : 400 ₹</Text>
                        </View>
                    </View>
                </TouchableOpacity>





                <TouchableOpacity >
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/data.jpeg')}
                            style={styles.image}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>Web Development</Text>
                                  
                            <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                            <Text style={styles.money}>price : 400 ₹</Text>
                        </View>
                    </View>
                </TouchableOpacity>




                <TouchableOpacity >
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/reactjs.png')}
                            style={styles.image}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>React Js</Text>
                                  
                            <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                            <Text style={styles.money}>price : 400 ₹</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                
                <TouchableOpacity >
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/iosdev.jpeg')}
                            style={styles.image}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>IOS Development</Text>
                                  
                            <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                            <Text style={styles.money}>price : 400 ₹</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity >
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/reactnative.png')}
                            style={styles.image}
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>React Native </Text>
                                  
                            <Text style={styles.footer}>April 2025 • by Jone Doe</Text>
                            <Text style={styles.money}>price : 400 ₹</Text>
                        </View>
                    </View>
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
        backgroundColor: '#FFFFFF', 
        marginBottom: hp('13%'), 
    },
    topbar:{
        height: hp('13%'),
        width: wp('100%'),
        backgroundColor: '#B17F59',
        
       
        
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
    subject: {
        borderRadius: 15,
        backgroundColor: '#FBFBFB',
        overflow: 'hidden',
        elevation: 3, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: hp('1.5%'),
    },
    subject_image: {
        height: hp('15%'),
        width: wp('70%'),
    },
    subject_text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 10,
        marginTop: 5,
    },


    // new course recomendation
    all_btn2: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    card: {
        borderRadius: 15,
        backgroundColor: '#FBFBFB',
        overflow: 'hidden',
        elevation: 3, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: hp('1.5%'),
        
      },
      image: {
        height: hp('15%'),
        width: wp('75%'),
      },
      content: {
        padding: 12,
        
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      message: {
        fontSize: 16,
        marginBottom: 12,
      },
      footer: {
        fontSize: 14,
        color: 'gray',
      },
      money: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold',
      },
    
    
})