// src/App.tsx
import React, { useState } from 'react';
import TopMenuBar from './TopMenuBar';

const App: React.FC<{}> = () => {
  const [page, setPage] = useState<string>('home');

  const handleButtonClick = (page: string) => {
    setPage(page);
  };

  return (
    <div>
      <TopMenuBar  />
      <div>
        {page === 'home' && <div>Home Page Content</div>}
        {page === 'about' && <div>About Page Content</div>}
        {page === 'contact' && <div>Contact Page Content</div>}
      </div>
    </div>
  );
};

export default App;