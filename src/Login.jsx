var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        {/* Font-Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" />
        {/* Styles */}
        <link rel="stylesheet" href="/css/login.css" /> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* Scripts */}
        <div className="container-fluid">
          <div className="forms-container">
            <div className="signin">
              <form action className="sign-in-form">
                <img className="login-logo" src="/img/vmb.png" alt="Logo" />
                <h2 className="title">Iniciar Sesión</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Usuario" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" className="btn btn-info" defaultValue="Acceder" />
                <a className="pwrecover" href>¿Olvidó su contraseña?</a> <br /> <br />
                <p className="copyright-text">© 2022 Virtualmed, TODOS LOS DERECHOS RESERVADOS </p>
              </form>
            </div>
          </div>
        </div>
        <div className="panels-container" />
      </div>
    );
  }
});