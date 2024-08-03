// Importamos las librerías necesarias desde React.
import React, { useState } from "react";

// Definimos la interfaz para las props del componente Login.
interface LoginProps {
  // La función onLogin se usa para actualizar el estado de autenticación.
  onLogin: (isAuthenticated: boolean) => void;
}

// Definimos el componente Login.
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // Definimos los estados para el nombre de usuario y la contraseña.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manejamos el envío del formulario.
  const handleSubmit = (event: React.FormEvent) => {
    // Evitamos que el formulario recargue la página al enviarse.
    event.preventDefault();
    // Aquí puedes agregar lógica de autenticación.
    if (username === "user" && password === "pass") {
      // Si las credenciales son correctas, actualizamos el estado de autenticación.
      onLogin(true);
    } else {
      // Si las credenciales son incorrectas, mostramos una alerta.
      alert("Credenciales incorrectas");
    }
  };

  // Renderizamos el componente.
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="./src/assets/img/logo-Servi-Ice-FINAL.png"
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Inicia sesión</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="correo o ID"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example11"
                        ></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example22"
                        ></label>
                      </div>

                      <div className="text-center pt-2 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2 me-2"
                          type="submit"
                        >
                          Inicia sesión
                        </button>
                        <a className="text-muted" href="#!">
                          olvidaste la contraseña?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Contato
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Ingreso de datos</h4>
                    <p className="small mb-0">
                      Los datos de ingreso deben estar en su correo electrónico.
                      Verifica tu correo al que indicaste a tu administrador
                      para la creación de cuenta.
                      <br />
                      <br />
                      Recuerda que la contraseña debe ser cambiada una vez
                      ingresado con la generada. Es importante no compartir
                      estos datos de ingreso por seguridad al ingreso malicioso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportamos el componente Login para su uso en otras partes de la aplicación.
export default Login;
