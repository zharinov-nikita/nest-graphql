import { ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LinkDocument = HydratedDocument<Link>;

@ObjectType()
@Schema()
export class Link {}

export const LinkSchema = SchemaFactory.createForClass(Link);
