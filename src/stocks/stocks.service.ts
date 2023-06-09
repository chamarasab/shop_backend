import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stocks, StocksDocument } from './schema/stocks.schema';
import { Model } from 'mongoose';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel(Stocks.name) private stocskModel: Model<StocksDocument>,
  ) {}

  async getAll(): Promise<Stocks[]> {
    return this.stocskModel.find().exec();
  }

  async create(stocks: Stocks) {
    const newStocks = new this.stocskModel(stocks);
    return newStocks.save();
  }

  async getById(id: string) {
    return this.stocskModel.findById(id).exec();
  }

  async update(id: string, stocks: Stocks) {
    return this.stocskModel.findByIdAndUpdate(id, stocks, { new: true });
  }

  async delete(id: string) {
    await this.stocskModel.findByIdAndRemove(id);
  }
}
