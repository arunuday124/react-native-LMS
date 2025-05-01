import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Dashboard from './src/components/Dashboard';
import Certificate from './src/components/Certificate';
import Prof_update from './src/components/Prof_update';
import Notification from './src/components/Notification';
import Password_chg from './src/components/Password_chg';
import Bugs from './src/components/Bugs';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown:false }}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Certificate" component={Certificate}/>
        <Stack.Screen name="Prof_update" component={Prof_update}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="Password_chg" component={Password_chg} />
        <Stack.Screen name="Bugs" component={Bugs} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
