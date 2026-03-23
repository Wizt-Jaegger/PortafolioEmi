import React from "react";
import NavbarDevOps from "../Navbar/NavbarDevOps.jsx";
import PresentacionVirtualization from "../Presentacion/PresentacionVirtualization";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

// Import DevOps Sections
import SupportEssentials from "./SupportEssentials";
import AutomationScripts from "./AutomationScripts";
import InfrastructureConfig from "./InfrastructureConfig";

const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            {/* Note: Ideally use a Navbar with links to #support, #automation, #infra */}
            <NavbarDevOps />
            
            <PresentacionVirtualization />

            {/* 1. THE HOOK: Technical Support Skills (Linux/Troubleshooting) */}
            <div id="support">
                <SupportEssentials />
            </div>

            {/* 2. THE EVIDENCE: Automation (Scripts/Tools) */}
            <div id="automation">
                <AutomationScripts />
            </div>

            {/* 3. THE FOUNDATION: Infrastructure (Cloud/Web) */}
            <div id="infra">
                <InfrastructureConfig />
            </div>

            <div className="container"></div>
            <Footer />
        </div>
    );
};

export default ContainerApp;