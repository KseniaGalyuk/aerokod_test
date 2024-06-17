import React, { FC } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

interface AdvantageItemProps {
  title: string;
  description: string;
  image: {
    src: string;
  };
}

const ItemAdventage: FC<AdvantageItemProps> = ({ title, description, image }) => (
  <div className="item-advantage">
    <div className="item-advantage__wrapper rounded-xl sm:rounded-20 overflow-hidden relative">
      <div className="item-advantage__top bg-white w-full relative">
        <div className="item-advantage__image overflow-hidden absolute w-full h-full top-0 left-0">
          <Image
            className="overflow-hidden absolute w-full h-full top-0 left-0 object-cover object-center"
            src={image.src}
            alt={title}
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="item-advantage__body bg-light-blue relative px-4 pt-4 lg:px-6 lg:pt-6">
        <div className="item-advantage__title font-bold xs:leading-7 md:leading-9 text-md xs:text-xl md:text-2xl">{title}</div>
        <div className=" text-xs xs:text-base line-clamp-6 lg:line-clamp-4 xs:leading-5">{description}</div>
      </div>
    </div>
  </div>
);

ItemAdventage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemAdventage;
