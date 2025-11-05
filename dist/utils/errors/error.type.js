"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmErrorCode = exports.TypeOrmErrorCodes = void 0;
var TypeOrmErrorCodes;
(function (TypeOrmErrorCodes) {
    TypeOrmErrorCodes["DuplicateKeyError"] = "DuplicateKeyError";
    TypeOrmErrorCodes["GeneralError"] = "GeneralError";
})(TypeOrmErrorCodes || (exports.TypeOrmErrorCodes = TypeOrmErrorCodes = {}));
const codeMapping = {
    '23505': TypeOrmErrorCodes.DuplicateKeyError,
};
const getTypeOrmErrorCode = (value) => {
    return (codeMapping[value] || TypeOrmErrorCodes.GeneralError).toString();
};
exports.getTypeOrmErrorCode = getTypeOrmErrorCode;
//# sourceMappingURL=error.type.js.map