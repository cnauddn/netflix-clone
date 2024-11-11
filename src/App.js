import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        {/* ContentRows will be added here later */}
        <section className="content-rows">
          <div className="content-rows__wrapper">
            {/* Example content rows - you can add more */}
            <div className="content-row">
              <h2 className="content-row__title">Trending Now</h2>
              {/* ContentRow component will be added here */}
            </div>
            
            <div className="content-row">
              <h2 className="content-row__title">Popular on Netflix</h2>
              {/* ContentRow component will be added here */}
            </div>
            
            <div className="content-row">
              <h2 className="content-row__title">Continue Watching</h2>
              {/* ContentRow component will be added here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
