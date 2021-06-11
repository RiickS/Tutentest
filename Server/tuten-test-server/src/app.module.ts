import { Module } from '@nestjs/common';
import { TimeController } from './controllers/time/time.controller';
import { TimeService } from './services/time/time.service';

@Module({
  controllers: [TimeController],
  providers: [TimeService],
})
export class AppModule { }
