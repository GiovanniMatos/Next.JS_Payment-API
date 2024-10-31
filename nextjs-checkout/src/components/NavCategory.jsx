"use client";

import React, { useState } from 'react';
import About from './About';
import Contributors from './Contributors';

function Navbar() {
  const [activeComponent, setActiveComponent] = useState(null);

  const showAboutContent = () => {
    setActiveComponent('about');
  };

  const showContributors = () => {
    setActiveComponent('contributors');
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'contributors':
        return <Contributors />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav>
        <ul className="flex font-bold text-2xl">
          <li className="mr-4 cursor-pointer text-orange-500 hover:text-orange-600"><a onClick={showAboutContent}>About</a></li>
          <li className="cursor-pointer text-orange-500 hover:text-orange-600"><a onClick={showContributors}>Contributors</a></li>
        </ul>
      </nav>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default Navbar;