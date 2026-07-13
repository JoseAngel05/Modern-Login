import { useState } from 'react'
import './App.css'

const initialForm = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

function App() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState(initialForm)
  const [errorMessage, setErrorMessage] = useState('')
  const isLogin = mode === 'login'

  const switchMode = (nextMode) => {
    setMode(nextMode)
    setForm(initialForm)
    setErrorMessage('')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!isLogin && form.password !== form.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden. Por favor verifica ambos campos.')
      return
    }

    if (isLogin) {
      alert(`Iniciando sesión con ${form.email}`)
    } else {
      alert(`Creando cuenta para ${form.username || form.email}`)
    }

    setForm(initialForm)
  }

  return (
    <div className="page-shell">
      <div className="background-glow glow-1" />
      <div className="background-glow glow-2" />
      <div className="background-glow glow-3" />

      <div className="auth-panel">
        <div className="panel-hero">
          <div className="hero-copy">
            <span className="eyebrow">Bienvenido</span>
            <h1>Accede con estilo y movimiento</h1>
            <p>
              Una experiencia de login moderna con animaciones suaves para iniciar sesión y
              registrarte sin perder el ritmo.
            </p>
          </div>

          <div className="switch-buttons" aria-label="Switch authentication mode">
            <button
              type="button"
              className={`switch-btn ${isLogin ? 'active' : ''}`}
              onClick={() => switchMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`switch-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => switchMode('signup')}
            >
              Registro
            </button>
          </div>
        </div>

        <div className={`card-shell ${isLogin ? 'show-login' : 'show-signup'}`}>
          <div className={`card-face card-front ${isLogin ? 'active' : ''}`} aria-hidden={!isLogin}>
            <div className="card-heading">
              <p>Accede a tu cuenta</p>
              <h2>Bienvenido de vuelta</h2>
            </div>
            {errorMessage && <div className="form-error">{errorMessage}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hola@ejemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Tu contraseña secreta"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="submit-btn" type="submit">
                Iniciar sesión
              </button>
            </form>
          </div>

          <div className={`card-face card-back ${!isLogin ? 'active' : ''}`} aria-hidden={isLogin}>
            <div className="card-heading">
              <p>Empieza ahora</p>
              <h2>Regístrate</h2>
            </div>
            {errorMessage && <div className="form-error">{errorMessage}</div>}
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="username">Nombre de usuario</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Tu nombre único"
                  value={form.username}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email-signup">Correo electrónico</label>
                <input
                  id="email-signup"
                  name="email"
                  type="email"
                  placeholder="hola@ejemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password-signup">Contraseña</label>
                <input
                  id="password-signup"
                  name="password"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Vuelve a escribir tu contraseña"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
              <button className="submit-btn" type="submit">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>

        <div className="caption">
          <span>{isLogin ? '¿Nuevo por aquí?' : '¿Ya tienes una cuenta?'}</span>
          <button
            type="button"
            className="link-button"
            onClick={() => switchMode(isLogin ? 'signup' : 'login')}
          >
            {isLogin ? 'Regístrate gratis' : 'Inicia sesión ahora'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
