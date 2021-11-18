import {useQuery} from 'react-query';
import {map} from 'rxjs';
import {dependencies} from '../../dependencies/Dependencies';

export function useLaunches() {
  return useQuery('launches', () => {
    const {launchesGateway} = dependencies;

    return launchesGateway
      .getLaunches()
      .pipe(
        map((result) => {
          console.log(result);

          return result;
        })
      )
      .subscribe({
        next: (launches) => launches,
        error: (err) => {
          throw err;
        },
      });
  });
}
