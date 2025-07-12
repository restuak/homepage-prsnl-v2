import { SiArcgis } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

export const SkillAndTech = {
  web: {
    title: "FULLSTACK WEB DEVELOPMENT",
    icon: FaLaptopCode,
    desc: "Build Modern, Responsive Website Applications in General",
    tech: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaReact, name: "ReactJS" },
      { icon: SiNextdotjs, name: "NextJS" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: FaCss3Alt, name: "RestAPI" },
    ],
  },
  webgis: {
    title: "WEBSITE APP GIS DEVELOPMENT",
    icon: SiArcgis,
    desc: "Build Website App based Geography Information System",
    tech: [
      { icon: FaHtml5, name: "ArcGIS Ol" },
      { icon: FaCss3Alt, name: "Leaflet" },
      { icon: FaJs, name: "MapBox" },
      { icon: FaHtml5, name: "GE Engine" },
      { icon: FaCss3Alt, name: "Python" },
      { icon: FaJs, name: "RestAPI" },
      { icon: FaCss3Alt, name: "MySQL" },
      { icon: FaJs, name: "PostgreSQL" },
    ],
  },
};


// export const techList = [
//   { name: "HTML", icon: React.createElement(FaHtml5, { className: "" }) },
//   { name: "CSS", icon: React.createElement(FaCss3Alt, { className: "" }) },
//   { name: "JavaScript", icon: React.createElement(FaJs, { className: "" }) },
//   { name: "TypeScript", icon: React.createElement(FaJs, { className: "" }) },
//   { name: "React", icon: React.createElement(FaReact, { className: "" }) },
//   { name: "NextJS", icon: React.createElement(SiNextdotjs, { className: "" }) },
//   { name: "TailwindCSS", icon: React.createElement(SiTailwindcss, { className: "" }) },
//   { name: "Bootstrap", icon: React.createElement(FaBootstrap, { className: "" }) },
// ];