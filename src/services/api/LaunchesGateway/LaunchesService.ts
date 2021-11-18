import {map, Observable} from 'rxjs';
import {NetworkingService} from '../../networking/NetworkingService';
import {LaunchesJSON, LaunchJSON} from '../models/LaunchesJSON';
import {LaunchesGateway} from './LaunchesGateway';

export class LaunchesService implements LaunchesGateway {
  constructor(private readonly networkingService: NetworkingService) {}

  getLaunches(): Observable<LaunchJSON[]> {
    return this.networkingService
      .getJSON<LaunchesJSON>('launch/upcoming/')
      .pipe(map((json) => json.results));
  }
}
