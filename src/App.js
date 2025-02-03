import React from 'react';
import { Header } from './components';
import { 
  HomePage,
  QuestionsPage,
  AnswersPage
} from './pages';
import { 
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/answers" element={<AnswersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
