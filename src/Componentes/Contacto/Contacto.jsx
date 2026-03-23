import React, { useEffect, useState } from "react";
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.svg';
import mail_icon from '../../assets/mail-icon.svg';
import phone_icon from '../../assets/phone-icon.svg';
import location_icon from '../../assets/location-icon.svg';
import { useLanguage } from "../../LanguageContext";

const translations = {
    es: {
        title: "Envíanos un mensaje",
        description: "Tómate la libertad de contactarnos por medio de este formulario. Tu retroalimentación, preguntas y sugerencias son importantes para nosotros.",
        name: "Nombre:",
        namePlaceholder: "Ingresa tu nombre",
        phone: "Teléfono:",
        phonePlaceholder: "Ingresa tu número de teléfono",
        message: "Escribe tu mensaje:",
        messagePlaceholder: "Ingresa tu mensaje aquí",
        send: "¡Enviar ahora!",
        sending: "Enviando...",
        sent: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje",
        connectionError: "Error de conexión",
        recentMessages: "Mensajes recientes:",
        noMessages: "No hay mensajes aún.",
        location: "Código postal 62550, Morelos, México"
    },
    en: {
        title: "Send us a message",
        description: "Feel free to contact us through this form. Your feedback, questions, and suggestions are important to us.",
        name: "Name:",
        namePlaceholder: "Enter your name",
        phone: "Phone:",
        phonePlaceholder: "Enter your phone number",
        message: "Write your message:",
        messagePlaceholder: "Enter your message here",
        send: "Send Now!",
        sending: "Sending...",
        sent: "Message sent successfully!",
        error: "Error sending the message",
        connectionError: "Connection error",
        recentMessages: "Recent Messages:",
        noMessages: "No messages yet.",
        location: "Postal code 62550, Morelos, Mexico"
    },
    de: {
        title: "Sende uns eine Nachricht",
        description: "Fühlen Sie sich frei, uns über dieses Formular zu kontaktieren. Ihr Feedback, Ihre Fragen und Anregungen sind uns wichtig.",
        name: "Name:",
        namePlaceholder: "Gib deinen Namen ein",
        phone: "Telefon:",
        phonePlaceholder: "Gib deine Telefonnummer ein",
        message: "Schreibe deine Nachricht:",
        messagePlaceholder: "Gib hier deine Nachricht ein",
        send: "Jetzt senden!",
        sending: "Wird gesendet...",
        sent: "Nachricht erfolgreich gesendet!",
        error: "Fehler beim Senden der Nachricht",
        connectionError: "Verbindungsfehler",
        recentMessages: "Neueste Nachrichten:",
        noMessages: "Noch keine Nachrichten.",
        location: "Postleitzahl 62550, Morelos, Mexiko"
    },
    fr: {
        title: "Envoyez-nous un message",
        description: "N'hésitez pas à nous contacter via ce formulaire. Vos commentaires, questions et suggestions sont importants pour nous.",
        name: "Nom:",
        namePlaceholder: "Entrez votre nom",
        phone: "Téléphone:",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        message: "Écrivez votre message:",
        messagePlaceholder: "Entrez votre message ici",
        send: "Envoyer maintenant!",
        sending: "Envoi...",
        sent: "Message envoyé avec succès!",
        error: "Erreur lors de l'envoi du message",
        connectionError: "Erreur de connexion",
        recentMessages: "Messages récents:",
        noMessages: "Aucun message pour l’instant.",
        location: "Code postal 62550, Morelos, Mexique"
    }
};

const Contacto = () => {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

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
        setResult(t.sending);
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
            await workerResponse.json().catch(() => ({})); // safe parse

            if (web3Data.success) {
                setResult(t.sent);
                event.target.reset();
            } else {
                setResult(t.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult(t.connectionError);
        }
    };

    return (
        <section id="contacto" className="contacto">
            <div className="contacto-col">
                <h3>{t.title} <img src={msg_icon} alt="msg icon" /></h3>
                <p>{t.description}</p>
                <ul>
                    <li><img src={mail_icon} alt="mail" />rglo210933@upemor.edu.mx</li>
                    <li><img src={phone_icon} alt="phone" />+52 777-990-4960</li>
                    <li><img src={location_icon} alt="location" />
                        Boulevard Cuauhnáhuac #566, Col. Lomas del Texcal, Jiutepec<br />
                        {t.location}
                    </li>
                </ul>
                <h3>{t.recentMessages}</h3>
                <div className="messages-container">
                    {messages.length > 0 ? (
                        messages.slice(-4).map((msg, index) => (
                            <p key={index}><strong>{msg.author}:</strong> {msg.body}</p>
                        ))
                    ) : (
                        <p>{t.noMessages}</p>
                    )}
                </div>
            </div>

            <div className="contacto-col">
                <form onSubmit={onSubmit}>
                    <label>{t.name}</label>
                    <input type="text" name="nombre" placeholder={t.namePlaceholder} required />

                    <label>{t.phone}</label>
                    <input type="tel" name="telefono" placeholder={t.phonePlaceholder} required />

                    <label>{t.message}</label>
                    <textarea name="mensaje" rows="6" placeholder={t.messagePlaceholder} required></textarea>

                    <button type="submit" className="btn">{t.send}</button>
                    <span>{result}</span>
                </form>
            </div>
        </section>
    );
};

export default Contacto;
