import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import StyleGuide from './pages/StyleGuide';


const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/styleguide" component={StyleGuide} />
        </Switch>
    );
}

export default App;
