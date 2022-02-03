import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

import projectData from '../../src/assets/data/projectData.json';
import ProductCard from './ProductCard';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';

const MyProjects = () => {
  return (
    <div className='overflow-x-hidden w-full'>
      <Divider />
      <div className='mt-24 flex flex-col'>
        <div className='ml-18'>
          <SectionHeader header='Projects' />
          <p className='text-slate-700 text-3xl font-semibold ml-12 mt-1'>Some Things I've Built.</p>
        </div>
        <div className=' -mt-8 flex flex-col w-full items-center justify-center'>
          {projectData.map((data, i) => (
            <FeaturedProductCard id={data.title + i + ''} {...data} isFlipped={i % 2 !== 0} />
          ))}
          <div className='mt-16 w-full flex flex-col items-center justify-center'>
            <div className='relative'>
              <p className='text-xl font-medium text-slate-600 mb-7'>Other Projects 👇</p>
            </div>
            <div className='flex flex-wrap  items-center justify-center w-2/3'>
              {projectData.map((data, i) => (
                <ProductCard id={data.title + i + ''} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;