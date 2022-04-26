import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      <img src={image} alt='Phone model'/>
    </div>
  );
}

export default Image;
