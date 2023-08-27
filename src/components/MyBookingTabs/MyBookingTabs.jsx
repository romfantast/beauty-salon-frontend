import { myBookingsData } from 'data/myBookingsData';
import { motion } from 'framer-motion';

export const MyBookingTabs = ({ activeIndex, onTabClick }) => {
  return (
    <div>
      <ul className="flex shadow-lg">
        {myBookingsData.map((item, index) => (
          <MyBookingItem
            key={item.tab}
            item={item}
            isSelected={activeIndex === index}
            onTabClick={() => onTabClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

const MyBookingItem = props => {
  const { item, isSelected, onTabClick = Function.prototype } = props;
  return (
    <motion.li
      initial={{
        color: 'rgb(2, 6, 23)',
      }}
      animate={{
        color: isSelected ? 'rgb(99, 102, 241)' : 'rgb(2, 6, 23)',
      }}
      key={item.tab}
      onClick={onTabClick}
      className="relative font-bold leading-6 text-base py-3 flex-grow text-center"
    >
      {item.tab}
      {isSelected && <ActiveLine />}
    </motion.li>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className="absolute bottom-0 w-full f h-0.5 bg-indigo-500"
    ></motion.div>
  );
};
