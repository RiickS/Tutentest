import { Body, Controller, Post } from '@nestjs/common';
import { TimeService } from 'src/services/time/time.service';

@Controller('time')
export class TimeController {

    constructor(private timeService: TimeService) { }

    @Post()
    processData(@Body() payload: any) {
        return { response: this.timeService.processData(payload) };
    }

}
