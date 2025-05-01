import React from 'react'
import { View, Text, ScrollView ,StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Exam = () => {
  return (
    <View style = {styles.container}>
      



        
      <ScrollView>
        {/* top image  */}
      <View  >
          <Image
            source={require('../assets/examimg.png')}
            style={{ width: wp('100%'), height: hp('40%') , backgroundColor: '#123456' ,  borderBottomLeftRadius: 10,  borderBottomRightRadius: 1  }} 
          />
      </View>

        {/* content after top image */}
        <Text style = {styles.top_text}>All Exams</Text>
            
          <TouchableOpacity >
                <View style={styles.card}>
                      <Image
                          source={require('../assets/reactnative.png')}
                          style={styles.image}
                      />
                      <View style={styles.content}>
                        <Text style={styles.title}>React Native</Text>                         
                        <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
                          <Text style={styles.footer}>Total 35 Questions</Text>
                          <Text style={styles.money}>Time : 60 min</Text>
                        </View>

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
                        <Text style={styles.title}>React Native</Text>                         
                        <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
                          <Text style={styles.footer}>Total 35 Questions</Text>
                          <Text style={styles.money}>Time : 60 min</Text>
                        </View>

                      </View>
                </View>
            </TouchableOpacity>
            
      </ScrollView>
      
    
    </View>
  )
}

export default Exam

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#FFFFFF',
    flex:1,
    marginBottom: hp('13%'), 
  },
  top_text:{
    fontSize: hp('3%'),
    color: '#183B4E',
    marginTop: hp('1.5%'),
    marginLeft: hp('2%'),
    fontWeight: 'bold',
  },


  card: {
    borderRadius: 15,
    backgroundColor: '#FBFBFB',
    overflow: 'hidden',
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 14,
    
  },
  image: {
    width: wp('100%'), 
    height: hp('20%'),
  },
  content: {
    padding: 16,
    
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
    fontWeight: 'bold',
    color: 'gray',
    
  },
 
  

 
})