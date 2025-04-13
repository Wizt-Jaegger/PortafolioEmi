import React from 'react';
import { useLanguage } from "../../LanguageContext"; // Import the language context
import styled from 'styled-components'; // Import styled-components

const TermsConditions = () => {
    const { language } = useLanguage(); // Use language context

    return (
        <TermsContainer>
            <h1>
                {language === "es" ? "TÉRMINOS Y CONDICIONES DE USO" : "TERMS AND CONDITIONS"}
            </h1>
            <h2>{language === "es" ? "INFORMACIÓN RELEVANTE" : "RELEVANT INFORMATION"}</h2>
            <p>
                {language === "es" ? 
                    "Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones." :
                    "It is a requirement to read and accept the following Terms and Conditions to acquire the products offered on this site. The use of our services and the purchase of our products will imply that you have read and accepted the Terms and Conditions stated in this document. All products offered by our website may be created, charged, shipped, or presented by a third-party website, and in such cases, they would be subject to their own Terms and Conditions."
                }
            </p>
            <h2>{language === "es" ? "LICENCIA" : "LICENSE"}</h2>
            <p>
                {language === "es" ? 
                    "Taloin Soluciones Tecnologicas SAS. a través de su sitio web concede una licencia para que los usuarios utilicen los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento." :
                    "Taloin Soluciones Tecnologicas SAS. through its website grants a license for users to use the products sold on this website in accordance with the Terms and Conditions described in this document."
                }
            </p>
            <h2>{language === "es" ? "USO NO AUTORIZADO" : "UNAUTHORIZED USE"}</h2>
            <p>
                {language === "es" ? 
                    "En caso de que aplique (para venta de software, plantillas, u otros productos de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo." :
                    "If applicable (for the sale of software, templates, or other design and programming products), you may not place any of our products, modified or unmodified, on a CD, website, or any other medium and offer them for redistribution or resale of any kind."
                }
            </p>
            <h2>{language === "es" ? "PROPIEDAD" : "PROPERTY"}</h2>
            <p>
                {language === "es" ? 
                    "Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita." :
                    "You may not claim intellectual or exclusive ownership of any of our products, modified or unmodified. All products are the property of the content providers. Unless otherwise specified, our products are provided without any express or implied warranty."
                }
            </p>
            <h2>{language === "es" ? "POLÍTICA DE REEMBOLSO Y GARANTÍA" : "REFUND AND WARRANTY POLICY"}</h2>
            <p>
                {language === "es" ? 
                    "En el caso de productos que sean mercancías irrevocables no tangibles, no realizamos reembolsos después de que se envíe el producto. Usted tiene la responsabilidad de entender esto antes de comprarlo. Hacemos solo excepciones a esta regla cuando la descripción no se ajusta al producto. Algunos productos pueden tener garantía y posibilidad de reembolso, pero esto se especificará al comprar el producto." :
                    "In the case of irrevocable non-tangible goods, we do not offer refunds after the product is sent. You are responsible for understanding this before making a purchase. Exceptions to this rule are made when the description does not match the product. Some products may have a warranty and refund possibility, but this will be specified when purchasing the product."
                }
            </p>
            <h2>{language === "es" ? "COMPROBACIÓN ANTIFRAUDE" : "ANTI-FRAUD CHECK"}</h2>
            <p>
                {language === "es" ? 
                    "La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas." :
                    "The customer's purchase may be delayed for an anti-fraud check. It may also be suspended for a longer time for a more rigorous investigation to prevent fraudulent transactions."
                }
            </p>
            <h2>{language === "es" ? "PRIVACIDAD" : "PRIVACY"}</h2>
            <p>
                {language === "es" ? 
                    "Este taloin.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales." :
                    "Taloin.com guarantees that the personal information you send is secure. The data entered by the user or in the case of requiring order validation will not be provided to third parties, unless it is required to be disclosed in compliance with a court order or legal requirements."
                }
            </p>
            <p>
                {language === "es" ? 
                    "La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta." :
                    "Subscription to advertising email newsletters is voluntary and can be selected when creating your account."
                }
            </p>
            <p>
                {language === "es" ? 
                    "Taloin Soluciones Tecnologicas SAS reserva los derechos de cambiar o modificar estos términos sin previo aviso." :
                    "Taloin Soluciones Tecnologicas SAS reserves the right to change or modify these terms without prior notice."
                }
            </p>
        </TermsContainer>
    );
};

// Estilos con styled-components
const TermsContainer = styled.div`
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

export default TermsConditions;
