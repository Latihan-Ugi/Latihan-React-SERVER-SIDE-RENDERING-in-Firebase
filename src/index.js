import React from 'react';
import { render } from 'react-dom';
import App from './App'
import getFacts from './facts';

getFacts().then(facts => {
    render(<App facts={facts.value}/>, document.querySelector('#root'));
})