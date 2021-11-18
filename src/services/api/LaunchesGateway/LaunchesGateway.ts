import {Observable} from 'rxjs';
import {LaunchJSON} from '../models/LaunchesJSON';

export interface LaunchesGateway {
  getLaunches(): Observable<LaunchJSON[]>;
}
