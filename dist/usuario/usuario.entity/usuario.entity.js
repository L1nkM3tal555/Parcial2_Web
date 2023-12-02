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
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const red_social_entity_1 = require("../../red-social/red-social.entity/red-social.entity");
const foto_entity_1 = require("../../foto/foto.entity/foto.entity");
let UsuarioEntity = class UsuarioEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => red_social_entity_1.RedSocialEntity, redSocial => redSocial.usuarios),
    __metadata("design:type", red_social_entity_1.RedSocialEntity)
], UsuarioEntity.prototype, "redSocial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => foto_entity_1.FotoEntity, fotos => fotos.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "fotos", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)()
], UsuarioEntity);
//# sourceMappingURL=usuario.entity.js.map