import dayjs from 'dayjs'

export function parseUnixTimestamp( 
  timestamp: number, 
  format: string = 'YYYY-MM-DDTHH:mm:ssZ' 
): string {
  const multiplier = 1000;
  return dayjs(timestamp * multiplier).format(format);
}