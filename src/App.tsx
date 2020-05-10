import React from 'react'
import { Helmet } from 'react-helmet'
import HttpsRedirect from 'react-https-redirect'
import './App.css'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/BlogListPage'
import StyleGuide from './pages/StyleGuide'
import { Global, css } from '@emotion/core'
import { margins } from './components/styling/margin'
import { bodyFont } from './components/styling/fonts'
import { RecipePage } from './pages/RecipePage'
import { BlogPage } from './pages/BlogPage'
import { AboutPage } from './pages/AboutPage'
import SupportPage from './pages/about/SupportPage'
import ContactPage from './pages/about/ContactPage'
import { GutHealthPage } from './pages/about/GutHealthPage'
import { MyStoryPage } from './pages/about/MyStoryPage'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { calcRem } from './components/styling/styling-utils/calcRem'
import PageNotFound from './pages/PageNotFound'
import GoogleAnalytics from './components/common/GoogleAnalytics'

export class App extends React.Component {
    render() {
        const history = createBrowserHistory()
        const heroImage = require('../components/Hero/heroImages/medium.jpg')
        return (
            <HttpsRedirect>
                <React.Fragment>
                    <Helmet titleTemplate="%s | Hayleys Health Foods">
                        <meta
                            name="keywords"
                            content="gut health, recipes, free, healthy, health foods, hayley, hayley van waas, hayley's health foods, healthy recipes, diet, diary free, gluten free, meals, snacks, drinks, side dishes"
                        />
                        <meta name="author" content="Hayley van Waas" />
                        <title>Home</title>
                        <meta
                            name="description"
                            content="Recipes designed with gut health in mind."
                        />
                        <link rel="canonical" href="hayleyshealthfoods.com" />
                        <meta property="og:title" content="Hayley's Health Foods" />
                        <meta
                            property="og:description"
                            content="Recipes designed with Gut Health in mind."
                        />
                        <meta property="og:image" content={heroImage} />
                    </Helmet>
                    <div className="container">
                        <Global
                            styles={css`
                                html {
                                    scroll-behavior: smooth;
                                }
                                body {
                                    margin: ${margins.bodyTopBottomMargin}
                                        ${margins.bodyLeftRightMargin.sm};
                                    padding: 0;
                                    max-width: 100vw;
                                    font-family: ${bodyFont};
                                }
                                .content-wrapper {
                                    min-height: 100vh;
                                    margin-bottom: ${calcRem(12)};
                                }
                            `}
                        />
                        <Router history={history}>
                            {GoogleAnalytics.init() && <GoogleAnalytics.RouteTracker />}
                            <div className="content-wrapper">
                                <Nav />
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/blog/:slug" component={BlogPage} />
                                    <Route path="/blog" component={BlogListPage} />
                                    <Route
                                        path="/recipes/:slug"
                                        render={props => (
                                            <RecipePage key={props.match.params.slug} {...props} />
                                        )}
                                    />
                                    component={RecipePage} />
                                    <Route path="/about/contact" component={ContactPage} />
                                    <Route path="/about/gut-health" component={GutHealthPage} />
                                    <Route path="/about/my-story" component={MyStoryPage} />
                                    <Route path="/about/support" component={SupportPage} />
                                    <Route path="/about" component={AboutPage} />
                                    <Route path="/styleguide" component={StyleGuide} />
                                    <Route component={PageNotFound} />
                                </Switch>
                            </div>
                            <Footer />
                        </Router>
                    </div>
                </React.Fragment>
            </HttpsRedirect>
        )
    }
}
