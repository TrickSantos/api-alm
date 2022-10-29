"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClubeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clube_dto_1 = require("./create-clube.dto");
class UpdateClubeDto extends (0, mapped_types_1.PartialType)(create_clube_dto_1.CreateClubeDto) {
}
exports.UpdateClubeDto = UpdateClubeDto;
//# sourceMappingURL=update-clube.dto.js.map