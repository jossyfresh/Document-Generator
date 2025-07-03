import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [DocumentService, UserService],
  controllers: [DocumentController],
})
export class DocumentModule {}
