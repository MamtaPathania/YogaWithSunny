import React from 'react';

const YogaIcon = ({ className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
      <circle cx="12" cy="5" r="2.5" fill="currentColor" />
      <path d="M12 8C9.5 8 7.5 10 7.5 12.5V16L4 19C4 19 4 21 12 21C20 21 20 19 20 19L16.5 16V12.5C16.5 10 14.5 8 12 8Z" fill="currentColor" />
      <path d="M8 21C8 21 9 18 12 18C15 18 16 21 16 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

export default YogaIcon;
