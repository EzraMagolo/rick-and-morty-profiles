// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function CharacterDetailPage() {
  const { id } = useParams();
  return <CharacterDetail id={id} />;
}

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;