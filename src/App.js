import Router from "./Router";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
    
    //<Router />
  );
}

export default App;
