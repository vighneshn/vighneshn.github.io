import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import NavigationButtons from './components/NavigationButtons';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import MiscPage from './components/MiscPage';
import MiscDetail from './components/MiscDetail';
import ResumePage from './components/ResumePage';
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    overflow-y: auto;
    overflow-x: auto;
    min-height: 100vh;
    height: auto;
  }
`;

// Home component that handles navigation
const Home: React.FC = () => {
  const navigate = useNavigate();

  // Handler for navigation button clicks
  const handleNavigation = (page: string) => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <NavigationButtons onNavigate={handleNavigation} />
  );
};

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/misc" element={<MiscPage />} />
          <Route path="/misc/:topicId" element={<MiscDetail />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
