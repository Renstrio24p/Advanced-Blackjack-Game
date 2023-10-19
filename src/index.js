import './assets/sass/index.scss';

// Lazy loads 

const loadStart = async () => {
    const module = await import('./start');
    return module.default;
};

const loadUniqueHash = async () => {
    const module = await import('./assets/security/hascode');
    return module.default;
};


const DOM = document.querySelector('#app');

Promise.all([loadStart(), loadUniqueHash()]).then(([Start, UniqueHash]) => {
    DOM.id = UniqueHash();
    Start(DOM);
});

// Javascript Webpack 5.88.1 Lazy loads