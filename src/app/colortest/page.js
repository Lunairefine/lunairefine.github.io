'use client'

import { useState } from 'react'

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('white')

  const colors = ['black', 'white', 'red', 'green', 'blue']

  const handleColorChange = (color) => {
    setBackgroundColor(color)
  }

  return (
    <div 
      className="flex flex-col justify-end items-center min-h-screen w-full"
      style={{ backgroundColor }}
    >
      <div className="flex justify-center items-center w-full mb-8">
        <div className="flex space-x-4">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform hover:scale-110`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
              aria-label={`Change background to ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}