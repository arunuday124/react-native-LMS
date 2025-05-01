import React from 'react'
import { View, Text, ScrollView ,StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Certificate = () => {
  return (
    
    <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#479AEF', padding: 20 , height: hp('12%')}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp('3%')}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Certificate</Text>

                {/* <TouchableOpacity style={{ backgroundColor: '#007B', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>Download</Text>
                </TouchableOpacity> */}
                
            </View>
          </View>

        <View>
            <View style = {styles.top_text}>
              <Text style = {styles.Certificate_text}>Data Science Certificate</Text>
            </View>
            <Image
              source = {require('../assets/crf1.jpg')}
              style = {styles.Certificate_image}
            />  

        </View>
    </ScrollView>
  )
}

export default Certificate

const styles = StyleSheet.create({
  Certificate_image:{
    height:hp('30%'),
    width:wp('100%'),
    padding: hp('2%'),
    marginTop:hp('2%'),
    borderRadius:10,
  },
  top_text:{
    
  },
  // Certificate_text:{
  //   fontSize:20,
  // },
})