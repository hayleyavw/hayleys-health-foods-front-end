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
import AboutPage from './pages/AboutPage'
import SupportPage from './pages/about/SupportPage'
import ContactPage from './pages/about/ContactPage'
import MyStoryPage from './pages/about/MyStoryPage'
import GutHealthPage from './pages/about/GutHealthPage'

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Global
                    styles={css`
                        body {
                            margin: ${margins.bodyTopBottomMargin} ${margins.bodyLeftRightMargin};
                            padding: 0;
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
                    <Route path="/about/contact" component={ContactPage} />
                    <Route path="/about/gut-health" component={GutHealthPage} />
                    <Route path="/about/my-story" component={MyStoryPage} />
                    <Route path="/about/support" component={SupportPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/styleguide" component={StyleGuide} />
                </Switch>
            </div>
        )
    }
}
