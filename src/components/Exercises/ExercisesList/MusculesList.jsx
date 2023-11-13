

import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import css from './ExercisesList.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuscules } from '../../../redux/exercises/operationsExercises';
import { selectMuscules } from '../../../redux/exercises/selectorsExercises';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const MusculesList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscules());
  }, [dispatch]);

  const muscules = useSelector(selectMuscules);
  const [currentPage, setCurrentPage] = useState(1);

  const determineItemsPerPage = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9;
    } else {
      return 10;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

  const handleResize = () => {
    setItemsPerPage(determineItemsPerPage());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = muscules.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ul className={css.exercisesUl}>
      {currentItems.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ul>
      {itemsPerPage < muscules.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={muscules.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
     </PaginationContainer>
  );
};


MusculesList.propTypes = {
  muscules: PropTypes.array,
};