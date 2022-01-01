import { FC } from 'react';
// interfaces
import { MealTextRepresentationProps } from './MealTextRepresentation.interface';
// styles
import { useMealTextRepresentationStyles } from './MealTextRepresentation.styled';

const MealTextRepresentation: FC<MealTextRepresentationProps> = ({
  productList,
}) => {
  const classNames = useMealTextRepresentationStyles();

  const textValue = productList
    .map((product) => {
      return `		${product.name} - ${product.weight}g - (${
        product.caloriesPer100g
      }kkal/100g) - ${Math.ceil(
        (product.caloriesPer100g * product.weight) / 100
      )}kkal`;
    })
    .join('\n');

  return (
    <div className={classNames.container}>
      <textarea className={classNames.textarea} value={textValue} />
    </div>
  );
};

export default MealTextRepresentation;
