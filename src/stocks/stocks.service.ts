import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stocks, StocksDocument } from './schema/stocks.schema';
import { Model } from 'mongoose';

@Injectable()
export class StocksService {
    constructor(
        @InjectModel(Stocks.name) private stocskModel: Model<StocksDocument>,
    ){}

    async getAll(): Promise<Stocks[]>{
        return this.stocskModel.find().exec();
    }

    async create(stocks:Stocks){
        const newStocks = new this.stocskModel(stocks);
        return newStocks;
    }
}
