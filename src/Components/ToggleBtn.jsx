import React, { Component } from 'react';

import Container from './Container';

const ToggleBtn = ({ toggleStatus, setToggleStatus }) => {
  const btns = ['All', 'Pending', 'Submitted', 'Reviewed'];
  return (
    <div>
      <Container>
        <div className="text-right mb-12">
          {btns.map((btn, i) => (
            <button
              key={i}
              onClick={() => setToggleStatus(btn)}
              className={`${i == 0 && 'rounded-l-lg'} ${
                i == btns.length - 1 && 'rounded-r-lg '
              } toggle-btn ${
                toggleStatus === btn && '!bg-purple-500 !text-white'
              }`}
            >
              {btn}
            </button>
          ))}

          {/* <button
            onClick={() => setToggleStatus('All')}
            className={`toggle-btn rounded-l-lg ${
              toggleStatus === 'All' && '!bg-purple-500 !text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setToggleStatus('Pending')}
            className={`toggle-btn ${
              toggleStatus === 'Pending' && '!bg-purple-500 !text-white'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setToggleStatus('Submitted')}
            className={`toggle-btn ${
              toggleStatus === 'Submitted' && '!bg-purple-500 !text-white'
            }`}
          >
            Submitted
          </button>
          <button
            onClick={() => setToggleStatus('Reviewed')}
            className={`toggle-btn rounded-r-lg ${
              toggleStatus === 'Reviewed' && '!bg-purple-500 !text-white'
            }`}
          >
            Reviewed
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default ToggleBtn;
