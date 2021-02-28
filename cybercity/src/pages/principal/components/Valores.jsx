import React from 'react';

import pc from '../../../img/pc.svg';

const Valores = () => {
    return ( 
        <section class="valores d-flex">
            <div class="d-flex flex-column justify-content-end">
                <div class="row aw-grid">
                    <div class="col-md-6">
                        <h5>Valores y Caracteristicas</h5>
                        <h4>Por que nos elijes?</h4>
                        <ol>
                            <li>Interfaz de usuario hermosa y facil de entender</li>
                            <li>Diseno perfecto y codigo claro entregado</li>
                            <li>Presente sus servicios</li>
                            <li>Encuentre mas ideas creativas para sus proyectos</li>
                            <li>Potencia ilimitada y posibilidades de personalizacion</li>
                        </ol>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={pc} class="img-fluid"  alt='imagen pc'/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Valores;