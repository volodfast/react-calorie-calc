export function getDateText(date: Date): string {
  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  })
    .format(date)
    .toLocaleLowerCase();
  const monthDay =
    date.getDate().toString().length == 1
      ? `0${date.getDate()}`
      : date.getDate().toString();
  const month = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  })
    .format(date)
    .toLocaleLowerCase();
  const year = date.getFullYear();

  return `${monthDay} ${month} ${year} (${weekday}):\n`;
}
