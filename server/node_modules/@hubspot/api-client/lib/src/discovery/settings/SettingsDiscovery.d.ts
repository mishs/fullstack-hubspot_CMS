import BaseDiscovery from '../BaseDiscovery';
import type UsersDiscovery from './users/UsersDiscovery';
export default class SettingsDiscovery extends BaseDiscovery {
    protected _users: UsersDiscovery | undefined;
    get users(): UsersDiscovery;
}
