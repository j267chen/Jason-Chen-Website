import React from 'react';
import { Link, scroller } from 'react-scroll';

const ScrollButton = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      offset: -30,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <Link
        activeClass="active"
        to=""
        spy={true}
      >
        <nav className="flex justify-center" style={{ gap: '192px' }}>
        <button onClick={() => scrollToElement('mechanical')}>
          <p className = "w-32 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"> MECHANICAL </p>
        </button>

        <button onClick={() => scrollToElement('electrical')}>
        <p className = "w-32 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"> ELECTRICAL </p>
        </button>

        <button onClick={() => scrollToElement('software')}>
        <p className = "w-32 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"> SOFTWARE </p>
        </button>
        </nav>
        
      </Link>

    </div>
  );
};



export default ScrollButton;