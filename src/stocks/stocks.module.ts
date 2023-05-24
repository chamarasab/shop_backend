import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksSchema } from './schema/stocks.schema';
import { StocksService } from './stocks.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Stocks',
                schema: StocksSchema,
                collection: 'stocks'
            }
        ])
    ],
    providers: [StocksService]
})
export class StocksModule { }
