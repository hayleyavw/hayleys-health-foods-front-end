import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import StyleGuide from './pages/StyleGuide';
import { Switch, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core'
import { margin } from './components/styling/margin';
import { bodyFont } from './components/styling/fonts';



export class App extends React.Component {
    render() {
        return(
            <div>
                <Global
                    styles={css`
                        body {
                            margin: ${margin.bodyMargin};
                            padding: 0;
                            min-height: 100vh;
                            max-width: 100vw;
                            font-family: ${bodyFont};
                        }
                    `}
                />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/styleguide" component={StyleGuide} />
                </Switch>
            </div>
        );
    }
}