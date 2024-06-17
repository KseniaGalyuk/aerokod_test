import React, { FC } from 'react';

const Controls: FC = () => (
  <div className="controls flex items-end justify-end">
    <div className="flex items-center justify-between">
      <button aria-label="Назад" type="button" className="controls__arrow controls__arrow_prev mr-3 border-black-100/40 border border-solid bg-transparent flex items-center justify-center relative rounded-full pointer-events-auto">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="stroke-main-color" d="M6.53296 2.1171L1.46706 7.12331L6.53296 11.8829" stroke="#222527" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </button>
      <button aria-label="Вперед" type="button" className="controls__arrow controls__arrow_next border-black-100/40 border border-solid bg-transparent flex items-center justify-center relative rounded-full pointer-events-auto">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="stroke-main-color" d="M1.46704 2.1171L6.53294 7.12331L1.46704 11.8829" stroke="#222527" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </button>
    </div>
  </div>
);

export default Controls;
