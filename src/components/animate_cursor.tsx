import React, { useState, useEffect } from 'react';

const MouseCursorBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setPosition({ x: e?.clientX, y: e?.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '100'
      }}
      className='hidden md:block'
    >
      <div
        style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          top: position.y,
          left: position.x,
        }}
        className='bg-primary opacity-45'
      />
    </div>
  );
};

export default MouseCursorBackground;
