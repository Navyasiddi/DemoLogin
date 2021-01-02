import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../app/login';
import EmployeeScreen from '../app/empdetails';
import { StyleSheet
    , Text
    , View,
    ScrollView
    , TextInput
    , TouchableOpacity
    ,Alert,
    Image
    } from 'react-native';


const Stack = createStackNavigator();


class RootComponent extends React.Component {
    render() {
        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    options={{
                       headerShown:false
                    }}
                    name="Main"
                    component={LoginScreen}
                />
                <Stack.Screen
                      options={({ navigation }) => ({
                     headerTitle: 'List of Employee',
                       
                        headerStyle: {
                            backgroundColor: '#ffffff'
                        },
                        headerTintColor: '#000000',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontFamily: 'Avenir-Heavy',
                            fontSize: 18,
                            fontWeight: 'bold'
                        },
                    })} 
                    name='Add'
                    component={EmployeeScreen}
                />
               </Stack.Navigator>

        </NavigationContainer>
        )
    }
}

export default RootComponent;
