import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';

const IndexPage = () => (
  <div>
    <HeroSection />
    <FeaturedBlogs />
    <TopCategories />
  </div>
);

export default IndexPage;
