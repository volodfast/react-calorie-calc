import { FC, useMemo } from 'react';
// utils
import { getDateText, getMealTypeText } from './MealTextRepresentation.utils';
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

  const dayText = useMemo(() => {
    return getDateText(date);
  }, [date]);

  const mealTypeText = useMemo(() => {
    return getMealTypeText({ date, calories: totalCalories, mealType });
  }, [date, totalCalories, mealType]);

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
      <textarea
        className={classNames.textarea}
        value={textValue}
        readOnly
        style={{
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default MealTextRepresentation;
