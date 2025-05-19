import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { links } from "./links";

export const items = [
  {
    id: 1,
    name: "Agenda tu cita",
    link: links.whatsapp,
    icon: <FaWhatsapp />,
  },
  {
    id: 2,
    name: "TikTok",
    link: links.tiktok,
    icon: <FaTiktok />,
  },
  {
    id: 3,
    name: "Instagram",
    link: links.instagram,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    name: "Facebook",
    link: links.facebook,
    icon: <FaFacebook />,
  },
  {
    id: 5,
    name: "YouTube",
    link: links.youtube,
    icon: <FaYoutube />,
  },
  {
    id: 6,
    name: "Ubicación",
    link: links.location,
    icon: <FaMapMarkerAlt />,
  },
];
