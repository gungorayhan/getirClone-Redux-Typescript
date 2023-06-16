import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import store from './src/app/store';
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import RootNavigator from './src/navigators/RootNavigator';
import * as Linking from "expo-linking"

LogBox.ignoreAllLogs();

const prefix =Linking.createURL('/')

export default function App() {
  const linking={
    prefixes:[prefix],
    config:{
      screens:{
        Search:{
          screens:{
            CartScreen:{
              path:"cartScreen/ContentId/:contentId",
              parse:{
              contentId:(message:string)=>`${message}`
              }
            }
          }
        }
      }
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop:"15%"
  },
});
