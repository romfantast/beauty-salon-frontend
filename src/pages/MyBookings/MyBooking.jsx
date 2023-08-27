import { MyBookingList } from 'components/MyBookingList/MyBookingList';
import { MyBookingTabs } from 'components/MyBookingTabs/MyBookingTabs';
import React, { useState } from 'react';

const MyBookings = () => {
  const [activeIndex, setActive] = useState(0);

  const handleClick = index => {
    setActive(index);
  };

  return (
    <section className="py-6">
      <h2 className="p-6 text-2xl font-bold text-slate-950 leading-6 mb-4">
        Your Bookings
      </h2>
      <div className="mb-8">
        <MyBookingTabs activeIndex={activeIndex} onTabClick={handleClick} />
      </div>
      <div>
        <MyBookingList id={activeIndex} />
      </div>
    </section>
  );
};

export default MyBookings;
