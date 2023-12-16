import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Partner } from '../partner';
import { Model } from 'mongoose';
import { Link } from './link.schema';

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(Link.name) private readonly linkModel: Model<Link>,
    @InjectModel(Partner.name) private readonly partnerModel: Model<Partner>,
  ) {}

  async create() {}
}
