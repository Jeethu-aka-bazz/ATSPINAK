import {mounths} from './mounths';

const getHours = hours => (hours > 12 ? hours - 12 : hours);

const getAmPm = hours => (hours > 12 ? 'PM' : 'AM');

export const formateTime = date => {
  return (
    getHours(date.getHours()) +
    ':' +
    date.getMinutes() +
    ' ' +
    getAmPm(date.getHours())
  );
};
