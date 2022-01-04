import { FC } from 'react';
// interfaces
import { MealTextRepresentationProps } from './MealTextRepresentation.interface';
// styles
import { useMealTextRepresentationStyles } from './MealTextRepresentation.styled';

const MealTextRepresentation: FC<MealTextRepresentationProps> = ({
  date,
  productList,
  mealType,
}) => {
  const classNames = useMealTextRepresentationStyles();

  const totalCalories = Math.ceil(
    productList.reduce(
      (acc, product) => acc + (product.weight * product.caloriesPer100g) / 100,
      0
    )
  );

  const dateString = `${date.getHours()}:${date.getMinutes()}`;

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

  const dayText = `${monthDay} ${month} ${year} (${weekday}):\n`;

  const mealTypeText = `	- ${
    mealType || 'unknown meal type'
  } - ${dateString} - (${totalCalories} kkal)\n`;

  const productListText = productList
    .map((product) => {
      return `		${product.name} - ${product.weight}g - (${
        product.caloriesPer100g
      }kkal/100g) - ${Math.ceil(
        (product.caloriesPer100g * product.weight) / 100
      )}kkal`;
    })
    .join('\n');

  const textValue = dayText + mealTypeText + productListText;

  const handleCopy = () => {
    navigator.clipboard.writeText(textValue);
  };

  return (
    <div className={classNames.container}>
      <button className={classNames.copyButton} onClick={handleCopy}>
        Copy
      </button>
      <textarea className={classNames.textarea} value={textValue} readOnly />
    </div>
  );
};

export default MealTextRepresentation;
