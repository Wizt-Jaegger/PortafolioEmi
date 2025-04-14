import {Routes, Route} from 'react-router-dom';
import Privacy from './Componentes/PoliticaTerminos/PrivacyPolicy';
import Terms from './Componentes/PoliticaTerminos/TermsConditions';
import Web from './Componentes/ComponentesWebApp/ContainerWebApp';
import DevOps from './Componentes/ComponentesDevOps/ContainerDevOps';
import ContainerApp from './ContainerApp';
import ScrollToTop from './Componentes/ScrollToTop';

const RouterComponent = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<ContainerApp />} />
                <Route path="/presentacion" element={<ContainerApp />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/web" element={<Web />} />
                <Route path="/devops" element={<DevOps />} />
            </Routes>
        </>
    );
};
export default RouterComponent;