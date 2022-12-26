import { Module } from '@nestjs/common';
import { providers } from 'ethers';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  controllers: [MessagesController],
  providers: [MessageRepository, MessagesService],
})
export class MessagesModule {}
