import React from 'react';
import { Switch} from 'react-router-dom';
import Main from './components/layout/Main'
import './App.css';
import PropTypes from 'prop-types';

function App({env}) {
  
  return <>
     <Switch>
           <Main env={env}/>
        </Switch>
    </>
}
App.propTypes = {
    env: PropTypes.object.isRequired
  };
  
export default App;