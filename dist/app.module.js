"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const album_entity_1 = require("./album/album.entity/album.entity");
const red_social_entity_1 = require("./red-social/red-social.entity/red-social.entity");
const foto_entity_1 = require("./foto/foto.entity/foto.entity");
const usuario_entity_1 = require("./usuario/usuario.entity/usuario.entity");
const typeorm_1 = require("@nestjs/typeorm");
const foto_module_1 = require("./foto/foto.module");
const usuario_module_1 = require("./usuario/usuario.module");
const red_social_module_1 = require("./red-social/red-social.module");
const album_module_1 = require("./album/album.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'socialnetworks',
                entities: [album_entity_1.AlbumEntity, red_social_entity_1.RedSocialEntity, foto_entity_1.FotoEntity, usuario_entity_1.UsuarioEntity],
                dropSchema: true,
                synchronize: true,
                keepConnectionAlive: true
            }),
            foto_module_1.FotoModule,
            usuario_module_1.UsuarioModule,
            red_social_module_1.RedSocialModule,
            album_module_1.AlbumModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map