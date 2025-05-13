'use client';

import React from 'react';

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-3xl bg-blue-600 text-white px-4 py-2 rounded ${className ?? ''}`}
    >
      {children}
    </button>
  );
}
