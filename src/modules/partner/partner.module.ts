import { Module } from '@nestjs/common';
import { PartnerResolver } from './partner.resolver';
import { PartnerService } from './partner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Partner, PartnerSchema } from './partner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }]),
  ],
  providers: [PartnerResolver, PartnerService],
})
export class PartnerModule {}
