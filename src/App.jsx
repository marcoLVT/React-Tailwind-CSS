import Saludo from "./saludo.jsx";
import Edad from "./edad.jsx";
import Opinion from "./opinion.jsx";
import Nombre from "./nombre.jsx";
import Gustos from "./gustos.jsx";

export default function app(){
  return(
    <section>
      <h1>Saludito</h1>
      <Saludo />
      <Edad />
      <Opinion />
      <Nombre nombre="Jesus" />
      <Gustos gusto="Mi gusto es el helado" />
    </section>
  );
};


