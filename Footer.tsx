import * as React from 'react';
import './style.css';


export default function Footer() {
  const today = new Date();
  const getYear = today.getFullYear();
  return (
    <div className={`container mt-5`}>
      <p className={`d-flex align-items-end justify-content-center`}><small>Copyright {getYear}</small></p>      
    </div>
  );
}