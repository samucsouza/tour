'use client';

import React from 'react';

export default function Card({ title, description, onButtonClick, className, flag }) {
  return (
    <div className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-white ${className ?? ''}`}>
      {/* Renderizando a bandeira se fornecida */}
      {flag && <img src={flag} alt="Bandeira" className="w-full h-40 object-cover" />}
      
      {/* Renderizando o título */}
      {title && <h3 className="text-xl font-semibold p-4">{title}</h3>}

      {/* Renderizando a descrição */}
      {description && <p className="text-gray-700 p-4">{description}</p>}

      {/* Renderizando o botão, se onButtonClick for fornecido */}
      {onButtonClick && (
        <button 
          onClick={onButtonClick} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg m-4"
        >
          Clique aqui
        </button>
      )}
    </div>
  );
}
