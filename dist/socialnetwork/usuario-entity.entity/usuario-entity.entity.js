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
exports.UsuarioEntityEntity = void 0;
const typeorm_1 = require("typeorm");
const red_social_entity_entity_1 = require("../red-social-entity.entity/red-social-entity.entity");
const foto_entity_entity_1 = require("../foto-entity.entity/foto-entity.entity");
let UsuarioEntityEntity = class UsuarioEntityEntity {
};
exports.UsuarioEntityEntity = UsuarioEntityEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], UsuarioEntityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntityEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntityEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => red_social_entity_entity_1.RedSocialEntityEntity, redSocial => redSocial.usuarios),
    __metadata("design:type", red_social_entity_entity_1.RedSocialEntityEntity)
], UsuarioEntityEntity.prototype, "redSocial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => foto_entity_entity_1.FotoEntityEntity, fotos => fotos.usuario),
    __metadata("design:type", Array)
], UsuarioEntityEntity.prototype, "fotos", void 0);
exports.UsuarioEntityEntity = UsuarioEntityEntity = __decorate([
    (0, typeorm_1.Entity)()
], UsuarioEntityEntity);
//# sourceMappingURL=usuario-entity.entity.js.map