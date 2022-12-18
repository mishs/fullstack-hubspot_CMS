import { AttendanceSubscriberStateChangesApi, MarketingEventsExternalApi, SettingsExternalApi } from '../../../../codegen/marketing/events/index';
import IConfiguration from '../../../configuration/IConfiguration';
export default class EventsDiscovery {
    attendanceSubscriberStateChangesApi: AttendanceSubscriberStateChangesApi;
    marketingEventsExternalApi: MarketingEventsExternalApi;
    settingsExternalApi: SettingsExternalApi;
    constructor(config: IConfiguration);
}
