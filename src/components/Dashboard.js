import React from 'react'
import { StyleSheet, Text, View ,Image,} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import Library from '../components/Library'
import Exam from '../components/Exam'
import Account from '../components/Account' 


const Tab = createBottomTabNavigator();
function Dashboard() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle:{

        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#DDA853',
        borderRadius: 15,
        height: 90,
        marginLeft: 10,
        marginRight: 10,
        ...styles.shadow
      }
      }}
    > 

      {/* home page */}
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style = {{ alignItems : 'center', justifyContent : 'center', }}>
              <Image 
                  source={require('../assets/home.png')}
                  resizeMode='contain'
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#02010a' : '#6c757d',
                    marginTop: 50,
                    
                    
                  }}
                />
              
            </View>

          ),

        }}
      />

      
      {/* Library page */}
      <Tab.Screen name="Library" component={Library}
              options={{
                tabBarIcon: ({focused}) => (
                  <View style = {{ alignItems : 'center', justifyContent : 'center', }}>
                    <Image 
                        source={require('../assets/library.png')}
                        resizeMode='contain'
                        style={{
                          width: 35,
                          height: 35,
                          tintColor: focused ? '#02010a' : '#6c757d',
                          marginTop: 50
                        }}
                      />
                    
                  </View>
      
                ),
      
              }}
      
      />
        
        {/* Search page */}
      <Tab.Screen name="Exam" component={Exam}
      
      options={{
        tabBarIcon: ({focused}) => (
          <View style = {{ alignItems : 'center', justifyContent : 'center', }}>
            <Image 
                source={require('../assets/exam.png')}
                resizeMode='contain'
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#02010a' : '#6c757d',
                  marginTop: 50
                }}
              />
            
          </View>

        ),

      }}
      
      />

      {/* Account page */}
      <Tab.Screen name="Account" component={Account} 
                options={{
                  tabBarIcon: ({focused}) => (
                    <View style = {{ alignItems : 'center', justifyContent : 'center', }}>
                      <Image 
                          source={require('../assets/user.png')}
                          resizeMode='contain'
                          style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#02010a' : '#6c757d',
                            marginTop: 50
                          }}
                        />
                      
                    </View>
        
                  ),
        
                }}
      
      />
      
    </Tab.Navigator>
  )
} 

export default Dashboard

// Styling functions
const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
