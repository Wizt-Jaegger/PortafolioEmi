import React, { useEffect, useState } from "react";
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.svg';
import mail_icon from '../../assets/mail-icon.svg';
import phone_icon from '../../assets/phone-icon.svg';
import location_icon from '../../assets/location-icon.svg';
import { useLanguage } from "../../LanguageContext";

const Contacto = () => {
    const { language } = useLanguage();
    const [result, setResult] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch("https://d1-jellyfun.vilfront.workers.dev/api/posts/hello-world/comments");
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(language === "es" ? "Enviando...." : "Sending....");
        const formData = new FormData(event.target);
        const nombre = formData.get("nombre");
        const mensaje = formData.get("mensaje");

        formData.append("access_key", "cd5a296f-47dd-4026-8472-7190b1a149f3");

        try {
            const [web3Response, workerResponse] = await Promise.all([
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                }),
                fetch("https://d1-jellyfun.vilfront.workers.dev/api/posts/hello-world/comments", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        author: nombre,
                        body: mensaje
                    })
                })
            ]);
        
            const web3Data = await web3Response.json();
        
            let workerData;
            try {
                workerData = await workerResponse.json();
            } catch (error) {
                console.warn("Error parsing worker response, but ignoring it:", error);
                workerData = {}; 
            }
        
            if (web3Data.success) { 
                setResult(language === "es" ? "Mensaje enviado con éxito!" : "Message sent successfully!");
                event.target.reset();
            } else {
                console.log("Error", web3Data, workerData);
                setResult("Error al enviar el mensaje");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("Error de conexión");
        }
    };

    return (
        <div className="contacto">
            <div className="contacto-col">
                <h3>{language === "es" ? "Envíanos un mensaje" : "Send us a message"} <img src={msg_icon} alt="" /></h3>
                <p>{language === "es" ? "Tómate la libertad de contactarnos por medio de este formulario de contacto. Tu retroalimentación, preguntas y sugerencias son importantes para nosotros." : "Feel free to contact us through this contact form. Your feedback, questions, and suggestions are important to us."}</p>
                <ul>
                    <li><img src={mail_icon} alt="" />rglo210933@upemor.edu.mx</li>
                    <li><img src={phone_icon} alt="" />+52 777-990-4960</li>
                    <li> <img src={location_icon} alt="" />Boulevard Cuauhnáhuac #566, Col. Lomas del Texcal, Jiutepec<br /> {language === "es" ? "Código postal 62550, Morelos, México" : "Postal code 62550, Morelos, Mexico"}</li>
                    <h3>{language === "es" ? "Mensajes recientes:" : "Recent Messages:"}</h3>
                    <li>
                        
                        <div className="messages-container">
                            {messages.length > 0 ? (
                                messages.slice(-4).map((msg, index) => (
                                    <p key={index}><strong>{msg.author}:</strong> {msg.body}</p>
                                ))
                            ) : (
                                <p>{language === "es" ? "No hay mensajes aún." : "No messages yet."}</p>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="contacto-col">
                <form onSubmit={onSubmit}>
                    <label>
                        {language === "es" ? "Nombre:" : "Name:"}
                    </label>
                    <input type="text" name="nombre" placeholder={language === "es" ? "Ingresa tu nombre" : "Enter your name"} required />
                    <label>
                        {language === "es" ? "Teléfono:" : "Phone:"}
                    </label>
                    <input type="tel" name="telefono" placeholder={language === "es" ? "Ingresa tu número de teléfono" : "Enter your phone number"} required />
                    <label>
                        {language === "es" ? "Escribe tu mensaje:" : "Write your message:"}
                    </label>
                    <textarea name="mensaje" rows="6" placeholder={language === "es" ? "Ingresa tu mensaje aquí" : "Enter your message here"} required></textarea>
                    <button type="submit" className="btn">{language === "es" ? "¡Enviar ahora!" : "Send Now!"}</button>
                    <span>
                        {result}
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
