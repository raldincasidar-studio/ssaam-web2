export default function ({ store, redirect, route }) {
    // If the user is not authenticated

    const path = route.path;

    if (path === '/dashboard' && !store.state.userStorage.loginSession.name) {
      return redirect('/get-started')
    } 

    if (['/get-started', '/registration'].includes(path) && store.state.userStorage.loginSession.name) {
        return redirect('/dashboard');
    }
  }