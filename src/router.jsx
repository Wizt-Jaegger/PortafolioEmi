import {Routes, Route} from 'react-router-dom';
import Privacy from './Componentes/PoliticaTerminos/PrivacyPolicy';
import Terms from './Componentes/PoliticaTerminos/TermsConditions';
import Web from './Componentes/ComponentesWebApp/ContainerWebApp';
import DevOps from './Componentes/ComponentesDevOps/ContainerDevOps';
import Linux from './Componentes/ComponentesLinux/ContainerLinux';
import Embedded from './Componentes/ComponentesEmbeb/ContainerEmbeb';
import Robots from './Componentes/ComponentesRobots/ContainerRobots';
import AI from './Componentes/ComponentesAI/ContainerAI';
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
                <Route path="/linux" element={<Linux />} />
                <Route path="/embedded" element={<Embedded />} />
                <Route path="/robots" element={<Robots />} />
                <Route path="/ai" element={<AI />} />
            </Routes>
        </>
    );
};
export default RouterComponent;