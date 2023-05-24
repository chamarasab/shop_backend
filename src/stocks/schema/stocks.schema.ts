import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";
export type StocksDocument = Stocks & Document;
@Schema({ collection: 'stocks' })
export class Stocks {
    @Prop()
    name: string;

    @Prop()
    price: string;

    @Prop()
    quantity: string;
}

export const StocksSchema = SchemaFactory.createForClass(Stocks);
