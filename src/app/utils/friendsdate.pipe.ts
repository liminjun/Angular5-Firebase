import * as moment from 'moment';
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'friendsdate'
})
export class FriendsDatePipe implements PipeTransform {
    transform(dateInMillis: string) {
        if (dateInMillis === '0' || dateInMillis === '-1') {
            return 'Invalid Date';
        }
        return moment(dateInMillis, 'x').format('MM/DD/YY');
    }
}
