import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { GadgetsModule } from './gadgets/gadgets.module';
import { BrandsModule } from './brands/brands.module';
import { ContactsModule } from './contacts/contacts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        uri: 'mongodb://mongo:27017',
        dbName: 'fixlab',
        auth: {
          username: 'root',
          password: 'admin123',
        },
      }),
    }),
    GadgetsModule,
    BrandsModule,
    UsersModule,
    AuthModule,
    ContactsModule,
    IssuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
