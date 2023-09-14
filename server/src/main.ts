import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import { join } from 'path';

import { AppModule } from 'domain/app.module';
import { SwaggerHelper } from 'helpers/swagger.helper';
import { MongoErrorsFilter } from 'filters/mongo-errors.filter';

const PORT = 3000;

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new MongoErrorsFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({ type: VersioningType.URI });
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public',
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const swagger = new SwaggerHelper();
  swagger.init(app);

  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`);
  });
})();
