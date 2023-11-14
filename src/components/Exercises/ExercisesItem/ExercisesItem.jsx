
import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
import images from '../../../images/0-default.jpg';
import { PropTypes } from 'prop-types';

export const ExercisesItem = ({
  exercisesItem,
  handleFilterClick,
  handleSetExName,
}) => {
  const { name, filter, gifURL } = exercisesItem;
  const onClick = name => {
    handleFilterClick('Waist');
    handleSetExName(name);
  };

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ExercisesLi onClick={() => onClick(name)}>
      <Image src={gifURL ? gifURL : images} alt={name} />
      <TitleContainer>
        <ExerciseItemTitle>{capitalizeFirstLeter(name)}</ExerciseItemTitle>
        <ExerciseItemText>{filter}</ExerciseItemText>
      </TitleContainer>
    </ExercisesLi>
  );
};

ExercisesItem.propTypes = {
  exercisesItem: PropTypes.object,
};
