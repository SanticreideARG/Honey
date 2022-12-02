import { Link } from "react-router-dom";

const Terminos = () => {
  return (
    <div className="container">
      <h3 className="mt-4 mb-4 sec-title center-this">Terminos y Condiciones</h3>

      <h6>Términos y Condiciones de uso</h6>
      <p>
        Es requisito necesario para la adquisición de los productos que se
        ofrecen en este sitio, que lea y acepte los siguientes Términos y
        Condiciones que a continuación se redactan. La compra de nuestros
        productos implicará que usted ha leído y aceptado los Términos y
        Condiciones de Uso en el presente documento. Todos los productos que son
        ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas
        o presentadas por una página web tercera (por ejemplo: MercadoPago) y en
        tal caso estarían sujetas a sus propios Términos y Condiciones. En
        algunos casos, para adquirir un producto, será necesario el registro por
        parte del usuario, con ingreso de datos personales fidedignos y
        definición de una contraseña.
      </p>
      <p>
        Todas las compras y transacciones que se lleven a cabo por medio de este
        sitio web, están sujetas a un proceso de confirmación y verificación, el
        cual podría incluir la verificación del stock y disponibilidad de
        producto, validación de la forma de pago, validación de la factura y el
        cumplimiento de las condiciones requeridas por el medio de pago
        seleccionado. En algunos casos puede que se requiera una verificación
        por medio de correo electrónico.
      </p>
      <p>
        Los precios de los productos ofrecidos en aqui son
        válidos solamente en las compras realizadas en esta tienda online.
      </p>

      <h6>Política de reembolso y garantía</h6>
      <p>
        Hacemos solamente excepciones con esta regla cuando la descripción no se
        ajusta al producto. Hay algunos productos que pudieran tener garantía y
        posibilidad de reembolso pero este será especificado al comprar el
        producto. En tales casos la garantía sólo cubrirá fallas de fábrica y
        sólo se hará efectiva cuando el producto se haya usado correctamente. La
        garantía no cubre averías o daños ocasionados por uso indebido. Los
        términos de la garantía están asociados a fallas de fabricación. No
        realizamos reembolsos después de que se envíe el producto, usted tiene
        la responsabilidad de entender antes de comprarlo. Le pedimos que lea
        cuidadosamente antes de comprarlo.
      </p>

      <h6>Privacidad</h6>
      <p>
        Este www.honeynqn.com.ar garantiza que la información personal que usted
        envía cuenta con la seguridad necesaria. Los datos ingresados por
        usuario o en el caso de requerir una validación de los pedidos no serán
        entregados a terceros, salvo que deba ser revelada en cumplimiento a una
        orden judicial o requerimientos legales.
      </p>
      <h6>
        USO de la Plataforma de HONEY con Productos y Servicios de Terceros
      </h6>

      <p>
        Nuestra Plataforma le permite interactuar con una amplia variedad de
        productos. Por ejemplo, nuestra Plataforma puede integrarse con
        dispositivos de terceros para el seguimiento de redes sociales y
        navegadores.
      </p>

      <p>
        Nuestra Plataforma puede proporcionar enlaces a otras páginas web y apps
        (de terceros) para su conveniencia o información. Las páginas web
        vinculadas tienen sus propios avisos o políticas de privacidad, que le
        recomendamos encarecidamente que revise. En la medida en que las páginas
        web y apps vinculadas no sean de nuestra propiedad ni estén controlados
        por nosotros, no nos hacemos responsables de su contenido, del uso que
        se haga de las páginas web, ni de las prácticas de privacidad de páginas
        web.
      </p>

      <h6>Cambios a nuestra Política de Privacidad</h6>

      <p>
        La ley aplicable y nuestras prácticas cambian con el tiempo. Si
        decidimos actualizar nuestra Política, publicaremos los cambios en
        nuestra Plataforma. Si cambiamos materialmente la forma en que tratamos
        los datos personales, le proporcionaremos un aviso previo o, cuando sea
        legalmente necesario, solicitaremos su consentimiento antes de llevar a
        cabo dichos cambios.
      </p>

      <p>
        Damos la bienvenida a preguntas, comentarios e inquietudes sobre nuestra
        Política y prácticas de privacidad. Si desea enviarnos sus comentarios,
        preguntas o inquietudes, o si desea ejercer sus derechos relacionados
        con sus datos personales, por favor enviando un correo electrónico a
        honeynqn@gmail.com.
      </p>
      <Link className="mt-3" to="/">
        <p>Volver a Inicio</p>
      </Link>
    </div>
  );
};

export default Terminos;
