import { Module } from '@nestjs/common';
import { LinkResolver } from './link.resolver';
import { LinkService } from './link.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './link.schema';
import { Partner, PartnerSchema } from '../partner';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Link.name, schema: LinkSchema },
      { name: Partner.name, schema: PartnerSchema },
    ]),
  ],

  providers: [LinkResolver, LinkService],
})
export class LinkModule {}
