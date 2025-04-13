import {Routes, Route} from 'react-router-dom';
import Privacy from './Componentes/PoliticaTerminos/PrivacyPolicy';
import Terms from './Componentes/PoliticaTerminos/TermsConditions';
import ContainerApp from './ContainerApp';

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<ContainerApp />} />
            <Route path="/presentacion" element={<ContainerApp />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
    );
};
export default RouterComponent;