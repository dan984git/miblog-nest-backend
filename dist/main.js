"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const whitelist = ["https://miblog.danielburbano.com"];
    var corsOptions = {
        origin: whitelist,
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ['error', 'warn', 'debug', 'log'] });
    app.setGlobalPrefix('api');
    app.enableCors(corsOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map