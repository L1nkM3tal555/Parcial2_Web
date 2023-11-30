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
exports.FotoEntityEntity = void 0;
const typeorm_1 = require("typeorm");
const album_entity_entity_1 = require("../album-entity.entity/album-entity.entity");
const usuario_entity_entity_1 = require("../usuario-entity.entity/usuario-entity.entity");
let FotoEntityEntity = class FotoEntityEntity {
};
exports.FotoEntityEntity = FotoEntityEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], FotoEntityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FotoEntityEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], FotoEntityEntity.prototype, "iso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], FotoEntityEntity.prototype, "velObturacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], FotoEntityEntity.prototype, "apertura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_entity_1.UsuarioEntityEntity, usuario => usuario.fotos),
    __metadata("design:type", usuario_entity_entity_1.UsuarioEntityEntity)
], FotoEntityEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => album_entity_entity_1.AlbumEntityEntity, album => album.fotos),
    __metadata("design:type", album_entity_entity_1.AlbumEntityEntity)
], FotoEntityEntity.prototype, "album", void 0);
exports.FotoEntityEntity = FotoEntityEntity = __decorate([
    (0, typeorm_1.Entity)()
], FotoEntityEntity);
//# sourceMappingURL=foto-entity.entity.js.map