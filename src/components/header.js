import React from 'react';
import Button from './button';

const Header = ({title }) => {
    return (
        <div className='header'>
          <h2>{title}</h2>
          <Button value = 'Add' onClick='onClick'/>
      </div>
    )
}

export default Header;