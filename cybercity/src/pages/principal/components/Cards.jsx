import React from 'react'

const Cards = () => {
    return(
        <div class="cards d-flex justify-content-around">
            <div class="card d-flex align-items-center">
                <div class="circle text-center">
                    <i class="fas fa-paint-brush icons"></i>
                </div>
                <h3>Diseño Cyber City</h3>
                <p class="text_cards">Desarrollamos nuestros productos con diseños inovadores y las tendencias actuales.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim eum, voluptates distinctio sunt a
                    animi! Quasi culpa, quis nostrum id est provident assumenda dolore enim. Rerum magnam cupiditate quae?
                </p>
            </div>
            <div class="card d-flex align-items-center">
                <div class="circle text-center">
                    <i class="fas fa-book icons"></i>
                </div>
                <h3 class="title_cards">Documentación completa</h3>
                <p class="text_cards">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium maxime
                    recusandae, doloremque quidem tempora a numquam officia nesciunt molestias deserunt eveniet architecto
                    praesentium itaque, nulla corporis rerum veniam aliquam unde.</p>
            </div>
            <div class="card d-flex align-items-center">
                <div class="circle text-center">
                    <i class="fas fa-clipboard-check icons"></i>
                </div>
                <h3>Precios razonables</h3>
                <p class="text_cards">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum eaque ab! Lorem
                    ipsum dolo. Sunt dolorum, ipsam, non totam rerum ut explicabo id modi aspernatur ex fuga excepturi quas
                    ea quo optio voluptas consequatur? Corrupti, voluptates!</p>
            </div>
            <div class="card d-flex align-items-center">
                <div class="circle text-center">
                    <i class="fas fa-clipboard-check icons"></i>
                </div>
                <h3>Clientes felices</h3>
                <p class="text_cards">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum eaque ab! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Minus, sequi placeat inventore perferendis odit atque
                    repellat aut voluptatibus libero sint amet consectetur doloremque, explicabo rerum?</p>
            </div>
        </div>
    );
}

export default Cards;
