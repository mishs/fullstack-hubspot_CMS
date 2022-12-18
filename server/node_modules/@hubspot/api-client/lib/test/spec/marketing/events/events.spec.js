"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_1.Client().marketing.events;
        expect(client.hasOwnProperty('attendanceSubscriberStateChangesApi')).toBeTruthy();
        expect(client.hasOwnProperty('marketingEventsExternalApi')).toBeTruthy();
        expect(client.hasOwnProperty('settingsExternalApi')).toBeTruthy();
    });
});
//# sourceMappingURL=events.spec.js.map