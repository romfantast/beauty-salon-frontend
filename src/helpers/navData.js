import { BiFace, BiHomeAlt, BiMap, BiNotepad } from 'react-icons/bi';

const navData = [
  {
    title: 'Home',
    path: '/',
    icon: <BiHomeAlt />,
  },
  {
    title: 'Nearby',
    path: '/nearby',
    icon: <BiMap />,
  },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <BiNotepad />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <BiFace />,
  },
];
export default navData;
