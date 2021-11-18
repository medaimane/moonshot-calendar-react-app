import {ajax} from 'rxjs/ajax';
import {LaunchesGateway} from '../services/api/LaunchesGateway/LaunchesGateway';
import {LaunchesService} from '../services/api/LaunchesGateway/LaunchesService';
import {DevNetworkingServiceConfig} from '../services/networking/NetworkingServiceConfig';
import {NetworkingServiceImpl} from '../services/networking/NetworkingServiceImpl';

export interface Dependencies {
  launchesGateway: LaunchesGateway;
}

const networkingService = new NetworkingServiceImpl(
  ajax,
  new DevNetworkingServiceConfig()
);

export const dependencies: Dependencies = {
  launchesGateway: new LaunchesService(networkingService),
};
