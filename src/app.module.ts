import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import baseConfig from './config/base-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersModule } from './modules/users/users.module';
import { CityModule } from './modules/city/city.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [baseConfig],
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    UsersModule,
    CityModule
  ],
})
export class AppModule {}