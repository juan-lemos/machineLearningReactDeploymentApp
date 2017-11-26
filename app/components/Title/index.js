import React from 'react';
import mushroomIcon from '../../images/mushrooms/mushroom.png';

function Title() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span>
        <img
          style={{ margin: 'auto', paddingLeft: '-40px', marginTop: '30px', marginBottom: '20px' }}
          src={mushroomIcon}
          alt={'icon'}
          height={'50px'}
        />
      </span>
      <span style={{ marginLeft: '20px' }}>
        <h1 style={{ color: 'white' }}> Mushroooms</h1>
      </span>
    </div>
  );
}

Title.propTypes = {

};

export default Title;
