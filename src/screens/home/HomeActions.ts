import {LaunchJSON} from '../../services/api/models/LaunchesJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('Home');

export const HomeActions = {
  fetchLaunches: {
    successs: actionCreator<LaunchJSON[]>('FETCH_LAUNCHES_SUCCESS'),
    failure: actionCreator('FETCH_LAUNCHES_FAILURE'),
  },
};

export const HomeViewActions = {
  fetchLaunchesRequest: actionCreator('FETCH_LAUNCHES_REQUEST'),
};
