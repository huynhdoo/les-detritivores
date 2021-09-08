import { nanoid } from 'nanoid';
/*import axios from 'axios';
const [Text, setText] = useState("");
  axios.get('https://api.storyblok.com/v2/cdn/stories/project?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
*/
// HEAD DATA
export const headData = {
  title: 'LES DETRITIVORES | Collecte et compostage des biodéchets',
  lang: 'fr',
  description: "Coopérative engagée pour l'inclusion et l'environnement par la valorisation de la matière organique",
};

// HERO DATA
export const heroData = {
  logo: 'logo.png',
  title: 'Nous sommes',
  name: 'LES DETRITIVORES',
  subtitle: "Coopérative engagée pour l'inclusion et l'environnement par la valorisation de la matière organique",
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  title: 'Nos engagements',
  img: 'equipe.jpg',
  text: "Chez LES DETRITIVORES, nous nous engageons pleinement et sans concession pour des territoires inclusifs, organiques et coopératifs",
  titleOne: 'Inclusif',
  paragraphOne: "En tant qu'Entreprise d'Insertion soutenue par l'Etat, nous créons et prenons soin d'emplois inclusifs dédiés à des personnes fragilisées par leurs situations sociales et professionnelles. Avec du temps, de la pédagogie et une organisation responsable, nous permettons à tous les talents de s'exprimer pour des territoires plus dynamiques.",
  titleTwo: 'Organique',
  paragraphTwo: "En contribuant à régénérer les sols agricoles par le compostage et le retour à la terre des restes alimentaires, nous favorisons des boucles organiques locales vertueuses de l'assiette à l'assiette pour des territoires plus résilients.",
  titleThree: 'Coopératif',
  paragraphThree: "En choisissant le mode d'organisation coopératif, nous avons posé un choix démocratique et économique à la hauteur des défis de notre époque : ouverture, créativité, réactivité pour des territoires plus innovants.",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sensibilisation.jpg',
    title: 'Sensibilisation au tri des biodéchets',
    info: '',
    info2: '',
    url: 'sensibilisation'
  },
  {
    id: nanoid(),
    img: 'collecte.png',
    title: 'Collecte des biodéchets',
    info: '',
    info2: '',
    url: 'collecte'
  },
  {
    id: nanoid(),
    img: 'compost.png',
    title: 'Compostage local',
    info: '',
    info2: 'test',
    url: 'compostage'
  },
  
  {
    id: nanoid(),
    img: 'vente.jpg',
    title: 'Vente de compost',
    info: '',
    info2: '',
    url: 'compost'
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: "N'hésitez pas à nous poser toutes vos questions sur les biodéchets, le compostage, l'inclusion, etc.",
  address : "65 quai de Brazza 33100 Bordeaux",
  phone : "05 56 67 14 47",
  btn: 'bonjour@les-detritivores.co',
  email: 'bonjour@les-detritivores.co',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://fr-fr.facebook.com/lesdetritivores/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/les-d%C3%A9tritivores',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/lesdetritivores',
    },
  ],
};