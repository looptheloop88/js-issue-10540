# Repro for issue 10540
### Steps
1. Serve the `index.html` file using a local web server (e.g., run `npx http-server` in the directory).
2. Open `http://localhost:8080` in a new browser tab (Tab A) and wait for "Auth state changed!" to appear in the developer console.
3. In Tab A's console, simulate a frozen, suspended background tab holding the IDB lock by executing the `suspendBackgroundTab.js` script.
4. Open the exact same URL `http://localhost:8080` in a second tab (Tab B).
5. Observe Tab B's console: Auth initialization (`onAuthStateChanged`) hangs indefinitely due to the locked database store.
6. Close Tab A. Immediately observe Tab B successfully bypass the lock and log the authentication state.
