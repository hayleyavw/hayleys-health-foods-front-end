import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/BlogListPage'
import StyleGuide from './pages/StyleGuide'
import { Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import { margins } from './components/styling/margin'
import { bodyFont } from './components/styling/fonts'
import { RecipePage } from './pages/RecipePage'
import { BlogPage } from './pages/BlogPage'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Global
                    styles={css`
                        body {
                            margin: ${margins.bodyTopBottomMargin} ${margins.bodyLeftRightMargin};
                            padding: 0;
                            min-height: 100vh;
                            max-width: 100vw;
                            font-family: ${bodyFont};
                        }
                    `}
                />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/blog/:slug" component={BlogPage} />
                    <Route path="/blog" component={BlogListPage} />
                    <Route path="/recipes/:slug" component={RecipePage} />
                    <Route path="/styleguide" component={StyleGuide} />
                </Switch>
            </div>
        )
    }
}
