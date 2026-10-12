
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/navbar.jsx';
import { Home } from './sections/home.jsx';
import { Stories } from './sections/stories.jsx';
import { Method } from './sections/method.jsx';
import { Comparison } from './sections/comparison.jsx';
import { CharacterExplorer } from './sections/character-explorer.jsx';
import { Insight } from './sections/insight.jsx';
import { About } from './sections/about.jsx';
import { Footer } from './components/footer.jsx';


function App() {
  return (
    <>
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/method" element={<Method />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/characters" element={<CharacterExplorer />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

