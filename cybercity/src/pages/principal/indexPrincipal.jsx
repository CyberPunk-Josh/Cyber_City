import React, {Fragment} from 'react'

// components
import Header from './components/Heades';
import Cards from './components/Cards';
import Nosotros from './components/Nosotros';
import Valores from './components/Valores';
import InfoServicios from './components/InfoServicios';
import DescriptionWork from './components/DescriptionWork';
import Productos from './components/Productos';
import Contact from '../layouts/Contact';

const Index = () => {
    return(
        <Fragment>
            <Header />
            <Cards />
            <Nosotros />
            <Valores />
            <InfoServicios />
            <DescriptionWork />
            <Productos />
            <Contact />
        </Fragment>
    );
}

export default Index;
