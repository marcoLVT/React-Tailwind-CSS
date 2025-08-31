import Saludo from "./saludo.jsx";
import Edad from "./edad.jsx";
import Opinion from "./opinion.jsx";

export default function app(){
  return(
    <section>
      <h1>Saludito</h1>
      <Saludo />
      <Edad />
      <Opinion />
    </section>
  );
};