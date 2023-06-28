import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { theme } from './src/constants/theme';
import LeaderBoard from './src/screens/leaderboard/leaderbord';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{ backgroundColor: theme.colors.background, flex: 1 }}
      >
        <StatusBar barStyle={'dark-content'} />
        <LeaderBoard />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
