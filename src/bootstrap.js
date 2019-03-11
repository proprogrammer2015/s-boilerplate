import { resolveAll } from './asyncLoad';
import Auth from './core/auth/auth';

// resolveAll([
//     './prod/core/auth/auth.js'
// ]).then(([Class]) => {
// return 
new Auth({
    target: document.getElementById('app'),
    data: {
        path: './prod/core/panel/subpanel/subpanel.js',
        text: 'vistex'
    }
});
// });