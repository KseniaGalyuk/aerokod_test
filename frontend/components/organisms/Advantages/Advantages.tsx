import React, { useEffect, FC } from 'react';
import PropTypes from 'prop-types';
import Swiper, { Navigation } from 'swiper';
import Controls from '@/components/atoms/Controls/Controls';
import ItemAdventage from '@/components/molecules/ItemAdventage/ItemAdventage';

Swiper.use([Navigation]);

interface AdvantageItem {
  id: number,
  title: string,
  description: string,
  image: {
    src: string
  }
}
interface AdvantagesProps {
  advantages: {
    title: string;
    items: AdvantageItem[];
  };
}

const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  useEffect(() => {
    const mySwiper = new Swiper('.advantages__slider', {
      watchOverflow: true,
      navigation: {
        nextEl: '.advantages__controls .controls__arrow_next',
        prevEl: '.advantages__controls .controls__arrow_prev',
      },
      centeredSlides: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          speed: 500,
        },
        767.98: {
          spaceBetween: 0,
          speed: 800,
        },
        991.98: {
          slidesPerView: 1.5,
        },
        1369.98: {
          slidesPerView: 1.7,
        },
        1629.98: {
          slidesPerView: 1.969,
        },
      },
    });

    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);
  return (
    <section className="advantages mb-14">
      <div className="container">
        <div className="relative pb-16 xl:pb-0">
          <div className="flex justify-between items-center mb-6 md:mb-9">
            <h2>{advantages.title}</h2>
            {advantages.items.length > 1 && (
              <div className="advantages__controls flex-0 absolute bottom-0 right-0 w-full xl:static xl:w-auto">
                <Controls />
              </div>
            )}
          </div>
          <div className="advantages__slider swiper overflow-visible">
            <div className="swiper-wrapper">
              {advantages.items.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <ItemAdventage key={item.id} {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Advantages.propTypes = {
  advantages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Advantages;
