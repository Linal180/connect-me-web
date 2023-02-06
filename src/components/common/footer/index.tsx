import React, { FC } from 'react';
import './footer.scss'


const Footer: FC = () => {
  return (
    <div className={'wrapper'}>
      <div className={'content'}>
        © new Date().getFullYear(). All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;