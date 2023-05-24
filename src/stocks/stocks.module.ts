import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksSchema } from './schema/stocks.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Stocks',
                schema: StocksSchema,
                collection: 'stocks'
            }
        ])
    ]
})
export class StocksModule { }
