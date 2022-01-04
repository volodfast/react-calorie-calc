function formatDigitDate(date: number | string) {
  const stringDate = date.toString();

  return stringDate.length === 1 ? `0${stringDate}` : stringDate;
}

export function getDateText(date: Date): string {
  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  })
    .format(date)
    .toLocaleLowerCase();
  const monthDay = formatDigitDate(date.getDate());
  const month = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  })
    .format(date)
    .toLocaleLowerCase();
  const year = date.getFullYear();

  return `${monthDay} ${month} ${year} (${weekday}):\n`;
}

type MealTypeTextConfigObject = {
  date: Date;
  calories: number;
  mealType?: string;
};

export function getMealTypeText({
  date,
  calories,
  mealType,
}: MealTypeTextConfigObject): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const dateString = `${formatDigitDate(hours)}:${formatDigitDate(minutes)}`;

  return `	- ${
    mealType || 'unknown meal type'
  } - ${dateString} - (${calories} kkal)\n`;
}
