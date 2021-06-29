import React from 'react';

const ModalCard = (data) => {
  return (
    <div
      className='card-container dark:bg-black-600 flex p-4 m-4 shadow cursor-pointer transition-all'
      onClick={() => data.setActive}
    >
      <div>title</div>
      <div>image</div>
      <div>text</div>
    </div>
  );
};

export default ModalCard;
