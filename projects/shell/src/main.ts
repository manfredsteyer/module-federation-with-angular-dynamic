import { loadManifest, loadRemoteEntry, setManifest } from '@angular-architects/module-federation';

// setManifest({
// 	"mfe1": "http://localhost:4201/remoteEntry.js",
// 	"mfe2": "http://localhost:4202/remoteEntry.js"
// });

Promise.all([
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js' }),
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4202/remoteEntry.js' })
])
.catch(err => console.error(err))
.then(_ => import('./bootstrap'))
.catch(err => console.error(err));


// loadManifest("/assets/mf.manifest.json", false)