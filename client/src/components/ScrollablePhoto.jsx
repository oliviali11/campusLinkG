import React from 'react';
import aerialClaremontColleges from '../assets/aerial-claremont-colleges.jpg'

const ScrollablePhoto = () => {
  return (
    <div className="h-screen overflow-y-auto">
    <div className="max-w-screen-xl mx-auto pt-20">
      <div className="relative">
        {/* Adjust marginTop to control the distance from the top */}
        <img
          src={aerialClaremontColleges}
          alt="Aerial Claremont Colleges"
          className="w-full"
        />
      </div>
    </div>
  </div>
  );
};

export default ScrollablePhoto;
