import { EventsApi } from '../../../codegen/events/index';
import IConfiguration from '../../configuration/IConfiguration';
export default class EventsDiscovery {
    eventsApi: EventsApi;
    constructor(config?: IConfiguration);
}
