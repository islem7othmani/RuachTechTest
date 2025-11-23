import React from 'react';

export default function Badge({ text }) {
  return (
    <div className="relative -top-3 left-1/2 py-2 transform -translate-x-1/2">
      <span className="bg-black text-white text-lg sm:text-lg px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl font-normal">
        {text}
      </span>
    </div>
  );
}
