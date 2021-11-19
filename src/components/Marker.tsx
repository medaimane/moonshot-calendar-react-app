import React, {FC} from 'react';
import {LaunchJSON} from '../services/api/models/LaunchesJSON';
import RoomIcon from '@mui/icons-material/Room';
interface Props {
  lat: number;
  lng: number;
  launch: LaunchJSON;
}

export const Marker: FC<Props> = ({launch}) => <RoomIcon color={'error'} />;
