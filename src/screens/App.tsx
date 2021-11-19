import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/configureStore';
import {HomeScreen} from './home/HomeScreen';
import {local} from '../localization/local';
import {TextView} from '../components/TextView';
import {Container} from '@mui/material';

export function App() {
  return (
    <Provider store={store}>
      <TextView text={local.logo} />
      <Container style={{display: 'flex', height: '80%', width: '80%'}}>
        <HomeScreen />
      </Container>
    </Provider>
  );
}
