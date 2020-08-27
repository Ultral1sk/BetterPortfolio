import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function Routes() {
  
  return <Layout>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />

          </Switch>

    </Layout>
  
}

export default Routes;
