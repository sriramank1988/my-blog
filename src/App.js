import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage}  />
        <Route path="/articleslist" component={ArticlesList}  />
        <Route path="/article" component={ArticlePage}  />
        
      </div>
    </Router>
  );
}

export default App;
