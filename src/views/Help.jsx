import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main>
      <header>
      <h1>Hola a todos desde la página de Help</h1>
      <h2>Aca van a encontrar como funciona, con que tecnologias se creó y posibles mejoras futuras</h2>
      </header>

      <section className="card">
        <h2>💡Funcionamiento del chat💡</h2>
        <ul>
          <li>Enviar mensajes</li>
          <li>Cambiar a modo oscuro</li>
          <li>Cambiar color de fondo del chat</li>
          <li>Ver usuarios online y su estado</li>
          <li>Persistencia gracias al localStorage</li>
        </ul>
      </section>

      <section className="card">
        <h2>🛠️Tecnologias utilizadas🛠️</h2>
        <ul>
          <li>React</li>
          <li>React Router DOM</li>
          <li>Context API</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </ul>
      </section>

      <section className="card">
        <h2>🚀Mejoras futuras🚀</h2>
        <ul>
          <li>Agregar opcion para mandar audios.</li>
          <li>Poder adjuntar videos, fotos, etc.</li>
          <li>Poder eliminar mensajes.</li>
          <li>Agregar opcion para tomar fotos</li>
          </ul>
      </section>
<button className="text-info">Para volver al <Link to="/chat">chat</Link></button>
    </main>
  )
}
export default Help