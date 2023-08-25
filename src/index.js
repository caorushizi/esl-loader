const a = 'test'


/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line import/no-mutable-exports
let global = {};
// eslint-disable-next-line import/no-mutable-exports
let PARAMS = {};
const ckInstance = {};
define('@baidu/udpsdk', () => udpsdk);


import('./package').then(module => {
    console.log(module.a)
})

function init(variable) { 
    PARAMS = variable;

    global = Global.getInstance(variable);
    console.log('init')
}


export {
    a
};