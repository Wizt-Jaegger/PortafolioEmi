import React from 'react';
import './Maps.css'; // Create this CSS file for styling

const Maps = () => {
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.9391500904344!2d-99.14288002490434!3d18.889780482276922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce7436090d122b%3A0x2acb88c1b5c1452a!2sUniversidad%20Politecnica%20del%20Estado%20de%20Morelos!5e0!3m2!1sen!2smx!4v1741047052054!5m2!1sen!2smx`;
    return (
        <div className="map-container">
            <iframe
                src={mapUrl}
                className="minimal-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Maps;
