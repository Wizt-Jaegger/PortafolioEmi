import React from 'react';
import { useLanguage } from "../../LanguageContext";
import styled from 'styled-components';

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    return (
        <PrivacyContainer>
            <h1>
                {language === "es" ? "POLÍTICA DE PRIVACIDAD" : "PRIVACY POLICY"}
            </h1>
            <p>
                {language === "es" ? 
                    "El presente Política de Privacidad establece los términos en que Taloin Soluciones Tecnologicas SAS usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios." : 
                    "This Privacy Policy outlines the terms under which Taloin Soluciones Tecnologicas SAS uses and protects the information provided by users when they use the website. This company is committed to ensuring the security of user data. When we ask you to fill in personal information fields that could identify you, we do so with the assurance that it will only be used according to the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize reviewing this page regularly to ensure you agree with any changes."}
            </p>
            <h2>{language === "es" ? "Información que es recogida" : "Information Collected"}</h2>
            <p>
                {language === "es" ? 
                    "Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación." : 
                    "Our website may collect personal information such as: Name, contact information like your email address, and demographic information. Additionally, when necessary, specific information may be requested to process an order or make a delivery or billing."}
            </p>
            <h2>{language === "es" ? "Uso de la información recogida" : "Use of Collected Information"}</h2>
            <p>
                {language === "es" ? 
                    "Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento." : 
                    "Our website uses the information to provide the best possible service, particularly to maintain user records, order logs if applicable, and improve our products and services. Periodic emails may be sent through our website with special offers, new products, and other advertising information that we consider relevant to you or that may provide you with a benefit. These emails will be sent to the address you provide and can be unsubscribed from at any time."}
            </p>
            <h2>{language === "es" ? "Cookies" : "Cookies"}</h2>
            <p>
                {language === "es" ? 
                    "Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web." : 
                    "A cookie refers to a file that is sent to request permission to store itself on your computer. By accepting this file, the cookie is created and serves to collect information regarding web traffic, and also facilitates future visits to a recurring website. Another function of cookies is that they allow websites to recognize you individually and therefore provide the best personalized service for their website."}
            </p>
            <h2>{language === "es" ? "Enlaces a Terceros" : "Links to Third Parties"}</h2>
            <p>
                {language === "es" ? 
                    "Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros." : 
                    "This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected, and therefore, we are not responsible for the terms of privacy or data protection on those third-party sites."}
            </p>
            <h2>{language === "es" ? "Control de su información personal" : "Control of Your Personal Information"}</h2>
            <p>
                {language === "es" ? 
                    "En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico." : 
                    "At any time, you can restrict the collection or use of personal information provided to our website. Whenever you are asked to fill out a form, such as the user registration form, you can check or uncheck the option to receive information via email."}
            </p>
            <p>
                {language === "es" ? 
                    "Taloin Soluciones Tecnologicas SAS Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento." : 
                    "Taloin Soluciones Tecnologicas SAS reserves the right to change the terms of this Privacy Policy at any time."}
            </p>
        </PrivacyContainer>
    );
};

// Estilos con styled-components
const PrivacyContainer = styled.div`
    margin: 20px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    font-size: 1.2rem;
    line-height: 1.7;
    color: #333;
    
    h1 {
        text-align: center;
        color: #132d46;
        margin-bottom: 20px;
        font-size: 2.5rem;
    }

    h2 {
        color: #01c38e;
        margin-bottom: 15px;
        font-size: 1.8rem;
    }

    p {
        color: #666;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }

    a {
        color: #01c38e;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default PrivacyPolicy;
