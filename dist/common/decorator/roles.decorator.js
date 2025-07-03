"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.Roler_Key = void 0;
const common_1 = require("@nestjs/common");
exports.Roler_Key = 'roles';
const Roles = (...roles) => {
    return (0, common_1.SetMetadata)(exports.Roler_Key, roles);
};
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map