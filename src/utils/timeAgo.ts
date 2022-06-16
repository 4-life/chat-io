import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo('en-US');

export default function getTimeAgo(date: Date): string {
  const time = timeAgo.format(date, 'mini-now');

  if (Array.isArray(time)) {
    return time[0];
  }

  return time;
}
