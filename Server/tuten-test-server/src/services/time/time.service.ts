import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class TimeService {

    processData(payload: any) {

        let data = {
            time: payload.time,
            timeZone: payload.timeZone
        };

        return this.timeUTC(data.time, data.timeZone)
    }

    timeUTC(hours: string, timeZone: number) {

        console.log(timeZone)

        let parseZone = timeZone;
        let hour = moment(hours, "hh:mm A").hours();
        let newHour = hour - parseZone;

        let minutes = (moment(hours, "hh:mm A").minutes());
        let seconds = (moment(hours, "hh:mm:ss A").seconds());


        if (newHour < 0) {
            newHour += 12
        }

        const time = `${newHour}:${minutes}:${seconds}`

        return { time, timeZone: "utc" }
    }
}
