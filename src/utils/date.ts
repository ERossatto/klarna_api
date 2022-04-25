import dayjs from 'dayjs'

export function parseUnixTimestamp( 
  timestamp: number, 
  format?: string, 
): string {
  const multiplier = 1000;
  let day = dayjs(timestamp * multiplier);

  if (format ) return day.format(format);

  return dayjs(timestamp * multiplier).toISOString();
}
