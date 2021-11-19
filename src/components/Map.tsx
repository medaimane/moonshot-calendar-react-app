import React, {FC} from 'react';
import GoogleMapReact from 'google-map-react';
import {getApiKey} from '../services/networking/getApiKey';

interface Props {
  style: {[key: string]: string};
}

export const Map: FC<Props> = ({style, children}) => {
  return (
    <GoogleMapReact
      style={style}
      yesIWantToUseGoogleMapApiInternals
      bootstrapURLKeys={{key: getApiKey()}}
      defaultZoom={3}
      defaultCenter={{
        lat: 0,
        lng: 0,
      }}
    >
      {children}
    </GoogleMapReact>
  );
};
