"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const ws_filter_1 = require("./ws.filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  const config = app.get(config_1.ConfigService);
  app.useGlobalPipes(new common_1.ValidationPipe());
  app.useGlobalFilters(new ws_filter_1.WsExceptionFilter());
  await app.listen(config.get("PORT")).then(() => console.log(`Running on port: ${config.get("PORT")}`));
}
bootstrap();
//# sourceMappingURL=main.js.map
