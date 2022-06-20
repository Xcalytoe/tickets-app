import { getHours, getMinutes, isToday, isYesterday } from "date-fns";
import format from "date-fns/format";

export const timeDateFun = (date: string) => {
  const yesterday = !!isYesterday(new Date(date));
  const today = !!isToday(new Date(date));
  const hr = getHours(new Date(date));
  const mn = getMinutes(new Date(date));
  if (today) {
    return `${today} @ ${hr}:${mn}`;
  } else if (yesterday) {
    return `${yesterday} @ ${hr}:${mn}`;
  } else {
    return `${format(new Date(new Date(date)), " MMMM d")}  @ ${hr}:${mn}`;
  }
};
