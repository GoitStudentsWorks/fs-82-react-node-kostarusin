import { useState, useEffect } from 'react';
import css from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.wrapper}>
      {products.length !== 0 ? (
        products.map((product, index) => {
          return (
            <div key={product._id}>
              <ul className={css.wrapperList}>
                <li className={css.wrapperItemTitle}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Title
                  </div>

                  <div className={css.text}>{product.title}</div>
                </li>
                <li className={css.wrapperItemCategory}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Category
                  </div>

                  <div className={css.text}>{product.category}</div>
                </li>
                <li className={css.wrapperItemCalories}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Calories
                  </div>

                  <div className={css.text}>{product.calories}</div>
                </li>
                <li className={css.wrapperItemWeigth}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Weight
                  </div>

                  <div className={css.text}>{product.amount}</div>
                </li>
                <li className={css.wrapperItemRecommend}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Recommend
                  </div>

                  <div className={css.flex}>
                    <div className={css.wrapperRecommend}>
                      <div>sv</div>
                      <div className={css.textRecommend}>Yes</div>
                    </div>
                    <button type="button" className={css.btnDelete}></button>
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div className={css.containerError}>
          <span>Not found products</span>
        </div>
      )}
    </div>
  );
};

export default ProductsList;