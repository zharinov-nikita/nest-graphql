import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Link } from '../link';
import * as mongoose from 'mongoose';

export type PartnerDocument = HydratedDocument<Partner>;

@ObjectType()
@Schema()
export class Partner {
  @Field(() => [Link])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }] })
  links: Link[];
}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
