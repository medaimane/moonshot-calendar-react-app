import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Map} from '../../components/Map';
import {Marker} from '../../components/Marker';
import {RemoteData} from '../../components/RemoteData';
import {RootState} from '../../store/rootState';
import {HomeViewActions} from './HomeActions';
import {getHomeViewState, HomeViewState} from './homeSelectors';

export function HomeScreen() {
  const dispatch = useDispatch();

  const fetchLaunches = useCallback(() => {
    dispatch(HomeViewActions.fetchLaunchesRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  const {viewState, launches} = useSelector<RootState, HomeViewState>((state) =>
    getHomeViewState(state.home)
  );

  return (
    <RemoteData
      viewState={viewState}
      renderData={() => (
        <Map
          center={{
            lat: 0,
            lng: 0,
          }}
          zoom={3}
          style={{flexGrow: '1', height: '100%'}}
        >
          {launches.map((launch, idx) => (
            <Marker
              key={'Marker_' + idx}
              position={{
                lat: Number(launch.pad.latitude),
                lng: Number(launch.pad.longitude),
              }}
            />
          ))}
        </Map>
      )}
    />
  );
}
