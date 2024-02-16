import React from "react";
import "./Map.css"

const Map = () => {
  return (
    <iframe className="iframe-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218991.11656164294!2d-77.16248038143534!3d39.038016598819674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2saz!4v1707253533424!5m2!1sen!2saz"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
  );
};

export default Map;

