import React, { useState } from "react";
import Login from "./components/login"; //llama el archivo login.jsx
import "bootstrap/dist/css/bootstrap.min.css"; //framework bootstrap

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container mt-5">
      {isAuthenticated ? (
        <h1>Bienvenido, estás autenticado!</h1>
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </div>
  );
};

export default App;
