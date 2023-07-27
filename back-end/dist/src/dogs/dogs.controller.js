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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const dogs_service_1 = require("./dogs.service");
let DogController = exports.DogController = class DogController {
    constructor(dogService) {
        this.dogService = dogService;
        this.dogs = [];
    }
    async findAll() {
        const dogs = await this.dogService.findAll();
        const obj = {
            "dogs": dogs,
        };
        return obj;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findAll", null);
exports.DogController = DogController = __decorate([
    (0, common_1.Controller)('dogs'),
    __metadata("design:paramtypes", [dogs_service_1.DogsService])
], DogController);
//# sourceMappingURL=dogs.controller.js.map