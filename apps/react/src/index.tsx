import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { configure as mobxConfigure } from 'mobx';
import { App } from './components/app/App';

mobxConfigure({
  enforceActions: 'always',
});

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
