import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://chamara:UaZESTbNGfyUAQ4k@shopcluster.th35ivz.mongodb.net/shop_db?retryWrites=true&w=majority'),
    StocksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
