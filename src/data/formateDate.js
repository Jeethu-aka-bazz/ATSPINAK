import {mounths} from './mounths';

export const formateDate = date => {
  return (
    date.getDate() + ' ' + mounths[date.getMonth()] + ' ' + date.getFullYear()
  );
};
