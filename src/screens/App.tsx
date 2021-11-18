import React from 'react';
import {Status, Wrapper as GoogleMapsWrapper} from '@googlemaps/react-wrapper';
import {Provider} from 'react-redux';
import {store} from '../store/configureStore';
import {HomeScreen} from './home/HomeScreen';
import {LoadingView} from '../components/LoadingView';
import {local} from '../localization/local';
import {getApiKey} from '../services/networking/getApiKey';

export function App() {
  return (
    <Provider store={store}>
      <div style={{display: 'flex', height: '100%'}}>
        <GoogleMapsWrapper
          apiKey={getApiKey()}
          render={(status) =>
            status === Status.LOADING ? <LoadingView /> : <h1>{local.logo}</h1>
          }
        >
          <HomeScreen />
        </GoogleMapsWrapper>
      </div>
    </Provider>
  );
}
