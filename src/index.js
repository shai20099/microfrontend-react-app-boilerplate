import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

(function () {
    const appId = "my-awesome-microfrontend";
    const rootElement = document.getElementById(appId);
    let Component;

    if(window.registerApp){
        window.registerApp({
            mount: (props) => {
                Component = ReactDOM.render(<App {...props} />, rootElement);
            },
            unmount: () => {
                ReactDOM.unmountComponentAtNode(rootElement);
            },
            update: (props) => {
                const newProps = { ...Component.props, ...props };
                ReactDOM.render(<App {...newProps} />, rootElement);
            },
            id: appId,
        });
    }
    else{
        ReactDOM.render(<App />, rootElement);
    }
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
