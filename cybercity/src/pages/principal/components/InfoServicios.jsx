import React from 'react';

import photo1 from '../../../img/photo-1515401558980-f84ec141ebf9.webp';
import photo2 from '../../../img/photo-1454165804606-c3d57bc86b40.webp';

const InfoServicios = () => {
    return ( 
        <div class="row imags_row">
            <div class="col">
                <img class="imags_row" src={photo1} alt="imagen de computadora" />
            </div>
            <div class="col">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque ducimus, deleniti
                quia sapiente maiores? Nostrum possimus, accusantium tempore alias impedit omnis, obcaecati aspernatur autem
                cumque commodi quam, dolores in?</div>
            <div class="col">
                <img class="imags_row" src={photo2} alt="imagen de computadoras" />
            </div>
            <div class="col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis debitis eos, odit
                impedit, omnis ad ipsa repellendus consequuntur hic totam facilis, ipsum quasi sit optio atque vel molestiae
                cum.</div>
        </div>
     );
}
 
export default InfoServicios;