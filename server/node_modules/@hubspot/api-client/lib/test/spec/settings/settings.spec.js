"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
const UsersDiscovery_1 = __importDefault(require("../../../src/discovery/settings/users/UsersDiscovery"));
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_1.Client().settings;
        expect(UsersDiscovery_1.default.name).toBe(client.users.constructor.name);
    });
});
//# sourceMappingURL=settings.spec.js.map