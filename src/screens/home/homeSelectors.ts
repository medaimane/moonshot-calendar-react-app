import {LaunchJSON} from '../../services/api/models/LaunchesJSON';
import {ViewState} from '../../store/ViewState';
import {HomeState} from './homeReducer';

export interface HomeViewState {
  viewState: ViewState;
  launches: LaunchJSON[];
}

export function getHomeViewState(state: HomeState): HomeViewState {
  return {
    ...state,
  };
}
