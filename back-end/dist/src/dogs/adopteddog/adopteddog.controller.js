"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptedDogsController = void 0;
const common_1 = require("@nestjs/common");
const adopteddog_service_1 = require("./adopteddog.service");
let AdoptedDogsController = exports.AdoptedDogsController = class AdoptedDogsController {
    constructor(adoptedDogsService) {
        this.adoptedDogsService = adoptedDogsService;
    }
    async getDogs(page = 1, pageSize = 10) {
        const adoptedDogs = await this.adoptedDogsService.getAllAdoptedDogs();
        const totalItem = await this.adoptedDogsService.getAllAdoptedDogsCount();
        if (isNaN(page) || isNaN(pageSize)) {
            page = 1;
            pageSize = totalItem;
        }
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const adoptedDog = adoptedDogs.slice(startIndex, endIndex);
        return { totalItem, adoptedDog };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdoptedDogsController.prototype, "getDogs", null);
exports.AdoptedDogsController = AdoptedDogsController = __decorate([
    (0, common_1.Controller)('adopteddog'),
    __metadata("design:paramtypes", [adopteddog_service_1.AdoptedDogsService])
], AdoptedDogsController);
//# sourceMappingURL=adopteddog.controller.js.map