import { FC } from 'react';
// interfaces
import { MealTextRepresentationProps } from './MealTextRepresentation.interface';
// styles
import { useMealTextRepresentationStyles } from './MealTextRepresentation.styled';

const MealTextRepresentation: FC<MealTextRepresentationProps> = ({
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

  const currentDate = new Date(Date.now());
  const dateString = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const mealTypeText = `	- ${mealType} - ${dateString} - (${totalCalories} kkal)\n`;
  const productListText = productList
    .map((product) => {
      return `		${product.name} - ${product.weight}g - (${
        product.caloriesPer100g
      }kkal/100g) - ${Math.ceil(
        (product.caloriesPer100g * product.weight) / 100
      )}kkal`;
    })
    .join('\n');

  const textValue = mealTypeText + productListText;

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
