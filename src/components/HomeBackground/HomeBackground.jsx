import css from './HomeBackground.module.css';

const HomeBackground = () => {
  return (
    <div className={css.image}>
      <div className={css.statistic1}>
        <div className={css.boxsvg1}>
          <svg width="20" height="20">
            <use href="/src/assets/icons-optimized.svg#icon-play"></use>
          </svg>
        </div>
        <div className={css.boxp}>
          <p className={css.number1}>350+</p>
          <p className={css.vid}>Video tutorial</p>
        </div>
      </div>
      <div className={css.statistic2}>
        <div className={css.boxsvg2}>
          <svg width="16" height="16">
            <use href="/src/assets/icons-optimized.svg#icon-running-figure"></use>
          </svg>
        </div>
        <p className={css.number2}>500</p>
        <p className={css.cal}>cal</p>
      </div>
    </div>
  );
};

export default HomeBackground;