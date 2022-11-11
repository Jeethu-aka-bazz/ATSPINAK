import {formateTime} from './formateTime';
import {mounths} from './mounths';

const getHours = hours => (hours > 12 ? hours - 12 : hours);

const getAmPm = hours => (hours > 12 ? 'PM' : 'AM');

export const formateDateTime = date =>
  date.getDate() + ' ' + mounths[date.getMonth()] + ', ' + formateTime(date);
