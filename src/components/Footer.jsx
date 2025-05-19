import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaSearchLocation } from 'react-icons/fa';
import { links } from '../data/links';
import { FaSquareYoutube } from 'react-icons/fa6';


export default function Footer() {
    const { whatsapp: whatsappLink, instagram: instagramLink, facebook: facebookLink, tiktok: tiktokLink, location: locationLink, youtube: youtubeLink } = links;

    return (
      <footer className="footer">
        <div className="footer__contact">
          <button
            className="icon footer__button"
            onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
            aria-label="WhatsApp"
            type="button"
          >
            <span className="footer__link-text">Agendar por WhatsApp</span>
            <FaWhatsapp className="footer__icon footer__icon--whatsapp" />
          </button>
        </div>
        <div className="footer__social">
          <a
            className="icon"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="footer__icon footer__icon--whatsapp" />
          </a>
          <a
            className="icon"
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="footer__icon footer__icon--instagram" />
          </a>
          <a
            className="icon"
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="footer__icon footer__icon--facebook" />
          </a>
          <a
            className="icon"
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok className="footer__icon footer__icon--tiktok" />
          </a>
          <a
            className="icon"
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaSquareYoutube className="footer__icon footer__icon--youtube" />
          </a>
          <a
            className="icon"
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <FaSearchLocation className="footer__icon footer__icon--location" />
          </a>
        </div>
      </footer>
    );
}