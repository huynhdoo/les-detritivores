import { nanoid } from 'nanoid';

export const projectsData = [
  {
    id: nanoid(),
    img: 'sensibilisation.jpg',
    title: 'Sensibilisation au tri des biodéchets',
    info: '',
    info2: '',
    url: 'sensibilisation',
  },
  {
    id: nanoid(),
    img: 'collecte.png',
    title: 'Collecte des biodéchets',
    info: '',
    info2: '',
    url: 'collecte',
  },
  {
    id: nanoid(),
    img: 'compost.png',
    title: 'Compostage local',
    info: '',
    info2: 'test',
    url: 'compostage',
  },

  {
    id: nanoid(),
    img: 'vente.jpg',
    title: 'Vente de compost',
    info: '',
    info2: '',
    url: 'compost',
  },
];

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
