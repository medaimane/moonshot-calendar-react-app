import {combineEpics, ofType} from 'redux-observable';
import {catchError, map, mergeMap, of} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeActions, HomeViewActions} from './HomeActions';

const fetchLaunches: EpicType = (action$, _, {launchesGateway}) =>
  action$.pipe(
    ofType(HomeViewActions.fetchLaunchesRequest.type),
    mergeMap(() =>
      launchesGateway.getLaunches().pipe(
        map(HomeActions.fetchLaunches.successs),
        catchError(() => of(HomeActions.fetchLaunches.failure()))
      )
    )
  );

export const homeEpic = combineEpics(fetchLaunches);
