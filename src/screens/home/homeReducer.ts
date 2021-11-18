import {LaunchJSON} from '../../services/api/models/LaunchesJSON';
import {Action} from '../../store/Action';
import {ViewState} from '../../store/ViewState';
import {HomeActions} from './HomeActions';

export interface HomeState {
  viewState: ViewState;
  launches: LaunchJSON[];
}

export const initialHomeState: HomeState = {
  viewState: ViewState.Loading,
  launches: [],
};

export function homeReducer(
  state: HomeState = initialHomeState,
  action: Action
): HomeState {
  switch (action.type) {
    case HomeActions.fetchLaunches.successs.type: {
      const launches: LaunchJSON[] = action.payload;

      return {
        ...state,
        launches,
        viewState: launches.length === 0 ? ViewState.Empty : ViewState.Data,
      };
    }

    case HomeActions.fetchLaunches.failure.type: {
      return {
        ...state,
        viewState: ViewState.Error,
      };
    }

    default: {
      return state;
    }
  }
}
