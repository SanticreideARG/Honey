import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Preguntas Frecuentes</h3>

      <h6>¿Cuándo voy a recibir mi pedido?</h6>

      <p>
        Los envíos se realizan a través de Correo Argentino en un plazo de entre
        3 y 10 días hábiles (dependiendo de la región). Las entregas se
        concretan de lunes a viernes de 8:00 a 20:00 y los sábados de 08:00 a
        12:00. No se realizan entregas los días domingos ni feriados. En lo que
        refiere a envíos a sucursal de Correo Argentino, deberás retirar tu
        pedido dentro de los siguientes 7 días corridos desde el día que llegó a
        destino. En caso que el paquete no sea retirado dentro de ese plazo,
        Correo Argentino lo devolverá al remitente. Para que te volvamos a
        reenviar el pedido deberás volver a abonarlo.
      </p>

      <h6>Modalidad Express Neuquén Capital</h6>

      <p>
        Una vez que realizaste tu compra, nos pondremos en contacto a la
        brevedad para coordinar el día y horario de envío. Los envíos se
        realizan en un plazo de 24 a 48 hs (dependiendo el día y horario en que
        se realizó la compra)
      </p>

      <h6>¿Cuál es el costo de envío?</h6>

      <p>El costo depende del código postal.</p>
      <p>
        Si es en Neuquen Capital – y la compra supera los $4.000 – el envio es
        gratis.
      </p>
      <p>
        Si es en Neuquen Capital – y si la compra es inferior a $4.000 – el
        valor es de $490.
      </p>
      <p>
        Si la compra tiene ubicación en el interior del país, tiene un costo de
        $690.
      </p>
      <p>Las promociones con envío gratuito serán comunicadas en el sitio.</p>

      <h6>No recibí mi pedido y ya pasó el plazo de entrega. ¿Qué hago?</h6>

      <p>Hace click en: VER INFORMACIÓN DE MI PEDIDO</p>

      <h6>¿Puedo hacer el seguimiento de mi pedido?</h6>

      <p>
        Te enviaremos un email con un código (tracking number) y las
        instrucciones para que puedas hacer el seguimiento de tu pedido. También
        podés realizar el estado de tu pedido desde aquí (Link de la página
        INFORMACIÓN DE MI PEDIDO)
      </p>

      <h6>¿Qué pasa si no hay nadie cuando traen mi pedido?</h6>

      <p>
        Si no hay nadie en el domicilio que nos indicaste, el correo regresará a
        las 48 horas. En caso de no encontrar a nadie, deberás dirigirte a la
        sucursal de Correo Argentino asignado a tu pedido dentro de las 72 horas
        con tu DNI y el código que te enviamos (tracking number).
      </p>

      <h6>¿Puede recibir el paquete otra persona?</h6>

      <p>
        Sí, no es necesario que esté presente quien realizó la compra. Puede
        recibirlo cualquier adulto.
      </p>

      <h6>INFORMACIÓN DE MI PEDIDO</h6>

      <p>
        Para poder ayudarte envíanos un mensaje con el número de pedido y el
        producto que compraste, por email a{" "}
        <a href="mailto:honeynqn@gmail.com">honeynqn@gmail.com</a> que te
        responderemos a la brevedad.
      </p>

      <h6>FORMAS DE PAGO</h6>

      <h6>¿No tenes tarjeta de crédito?</h6>

      <p>
        MERCADOPAGO garantiza la seguridad en todas las operaciones que se
        generen a través de su sistema de privacidad que protege los datos de
        tarjeta y con un programa de protección al comprador. Si surgiera algún
        inconveniente con la compra la plataforma te devuelve el 100% del
        dinero. Más información sobre los parámetros de seguridad de Mercado
        Pago aquí.
      </p>
      <a href="https://www.mercadopago.com.ar/mercado-credito/comprar-cuotas-sin-tarjeta">
        {" "}
        https://www.mercadopago.com.ar/mercado-credito/comprar-cuotas-sin-tarjeta{" "}
      </a>

      <h6>CAMBIOS Y DEVOLUCIONES </h6>

      <p>
        No se realizan cambios ni devoluciones excepto encaso de fallas de
        fabrica.
      </p>

      <h6>Devolución de dinero:</h6>
      <p>
        Para los casos en los que ocurriera algún imprevisto podemos hacer una
        devolución del dinero que se realizará siempre por el mismo medio en que
        se abonó (MercadoPago). Las mismas son excepcionales, pero siempre que
        corresponda devolveremos tu dinero. Este proceso demora 72 hs hábiles
        aproximadamente.
      </p>
      <Link to="/">
        <p>Volver a Inicio</p>
      </Link>
    </div>
  );
};

export default Faq;
