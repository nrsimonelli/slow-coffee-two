import React from 'react';

const ModalCard = (card) => {
  return (
    <div
      className='card-container dark:bg-black-600 flex p-4 m-4 shadow'
      onClick={() => console.log(card.id)}
    >
      <div>title</div>
      <div>image</div>
      <div>text</div>
    </div>
  );
};

export default ModalCard;
