import React from 'react';

const Skeleton = ({ className = "", width, height }) => {
  const baseClasses = "animate-pulse bg-gray-200 rounded";
  const combinedClasses = `${baseClasses} ${className}`;
  
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;
  
  return <div className={combinedClasses} style={style}></div>;
};

export default Skeleton;
