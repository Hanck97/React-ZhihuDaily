import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import route from './router/route';
import store from './router/store';

ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}