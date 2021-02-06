import React from 'react';

/**
 * Do not add React.FC if you want to use it
 * on Home page
 */
export const Loading = () => (
  <div
    className="w-screen h-screen flex justify-center items-center
bg-gray-800"
  >
    <p className="text-white">Loading...</p>
  </div>
);
