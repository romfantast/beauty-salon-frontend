import { BeautyServices } from 'components/BeautyServices/BeautyServices';
import { BestOffers } from 'components/BestOffers/BestOffers';
import { Icon } from 'components/Icon/Icon';
import { SearchService } from 'components/SearchService/SearchService';
import React from 'react';

export default function Home() {
  return (
    <section className="p-6">
      <div className="flex gap-2 items-center mb-4">
        <Icon id="location" width="14" height="14" />
        <span>Munich Center</span>
        <Icon id="arrow-down" width="16" height="16" />
      </div>
      <SearchService />
      <BeautyServices styles="mb-8" />
      <BestOffers styles="mb-14" />
    </section>
  );
}
