import { BiFace, BiHomeAlt, BiMap, BiNotepad } from 'react-icons/bi';

const navData = [
  {
    title: 'Home',
    path: '/home',
    icon: <BiHomeAlt />,
  },
  {
    title: 'Nearby',
    path: '/nearby',
    icon: <BiMap />,
  },
  {
    title: 'My Bookings',
    path: '/mybookings',
    icon: <BiNotepad />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <BiFace />,
  },
];
export default navData;
