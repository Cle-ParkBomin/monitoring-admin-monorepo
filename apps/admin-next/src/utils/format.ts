export function formatTimestampToDate(timestamp?: string | number) {
  if (!timestamp) return undefined;

  const date = new Date(Number(timestamp));

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
