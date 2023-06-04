import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { Stocks } from './schema/stocks.schema';

@Controller('stocks')
export class StocksController {
  constructor(private stocksService: StocksService) {}

  @Get()
  async getAll() {
    return this.stocksService.getAll();
  }

  @Post()
  async createStocks(@Body() stocks: Stocks) {
    return this.stocksService.create(stocks);
  }
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.stocksService.getById(id);
  }
}
