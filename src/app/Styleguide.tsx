import React from 'react';

function Styleguide() {
  return (
    <div>
      <h2>Colors</h2>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        ></div>
      </div>
      <div>
        <h2>Box</h2>
        <div
          style={{
            width: 150,
            height: 150,
            background: 'var(--box-color)',
            borderRadius: 'var(--border-radius)',
            fontFamily: 'var(--font-family)',
            padding: '0.5rem',
          }}
        ></div>
        <div>
          <h2>Button</h2>
          <button>Button</button>
        </div>
        <div>
          <h2>Headlines</h2>
          <h3 style={{ fontFamily: 'var(--font-family)' }}>Headline 1</h3>
        </div>
      </div>
    </div>
  );
}

export default Styleguide;
