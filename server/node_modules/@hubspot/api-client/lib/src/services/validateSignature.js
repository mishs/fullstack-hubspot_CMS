"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignature = void 0;
const crypto = require("crypto");
function validateSignature(signature, clientSecret, requestBody, signatureVersion = 'v1', webhooksUrl, webhooksMethod = 'POST') {
    const sourceString = signatureVersion === 'v1' ? clientSecret + requestBody : clientSecret + webhooksMethod + webhooksUrl + requestBody;
    const hash = crypto.createHash('sha256').update(sourceString).digest('hex');
    return signature === hash;
}
exports.validateSignature = validateSignature;
//# sourceMappingURL=validateSignature.js.map