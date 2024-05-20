import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './redux/store';
import StackNavigator from './navigations/StackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
