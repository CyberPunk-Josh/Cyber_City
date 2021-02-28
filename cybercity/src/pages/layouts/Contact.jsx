import React from 'react'

const Contact = () => {
    return ( 
        <section class="contacto d-flex flex-column align-items-center justify-content-center">
            <h2 class="text-center text-white">Contactanos</h2>
            <div class="formulario_contacto">
                <form>
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div class="form-group">
                        <label for="Telefono">Telefono</label>
                        <input type="number" class="form-control" id="telefono" placeholder="Tu telefono" />
                    </div>
                    <div class="form-group">
                        <label for="mail">E-mail</label>
                        <input type="text" class="form-control" id="mail" placeholder="Tu e-mail" />
                    </div>
                    <div class="form-group">
                        <label for="mensaje">Mensaje</label>
                        <textarea id="mensaje" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;