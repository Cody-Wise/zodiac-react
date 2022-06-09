import React from 'react';
import './Header.css';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Header(props) {
  return (
    <header>
      Alchemy Astrology, by {props.name}{' '}
      <MenuOutlinedIcon
        className='material-icons'
        style={{ fontSize: '55px' }}
      />
    </header>
  );
}
