import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import BlogPage from './pages/BlogPage';


const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
        </Switch>
    );
}

export default App;
