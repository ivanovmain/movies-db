import React from 'react';
import './error-indicator.scss';

const ErrorIndicator = () => {
  return(
    <div className='error'>
      <h2>Ooops!!!</h2>
      <h3><span aria-label="Дразнилка" role="img">&#128540;</span></h3>
    </div>
  )
};

export default ErrorIndicator;