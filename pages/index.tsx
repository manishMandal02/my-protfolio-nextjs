import Head from 'next/head';
import { NextSeo } from 'next-seo';

// components

import Navbar from '../components/UI/Navbar';
import HeroSection from '../components/landingSection/Index';
import MyProjects from '../components/myProjects/index';
import ContactMe from '../components/contactMe/Index';
import AboutMe from '../components/aboutMe/Index';

export default function Home() {
  return (
    <div className=' flex flex-col min-h-screen overflow-x-hidden transition-all duration-150'>
      <Head>
        <title>Manish Mandal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='Manish Mandal'
        titleTemplate='Manish Mandal'
        defaultTitle='Manish Mandal'
        description='A FullStack web developer, Experienced in using JavaScript and its ecosystem, namely React & NodeJs to develop applications.'
        canonical='https://manishmandal.me/'
        openGraph={{
          url: 'https://manishmandal.me/',
          title: 'Manish Mandal',
          description:
            'A FullStack Web Developer,  Experienced in using JavaScript and its ecosystem, namely React & NodeJs to develop applications.',
          images: [
            {
              url: '/manish-mandal-web.png',
              width: 800,
              height: 420,
              alt: 'Manish Mandal',
            },
          ],
        }}
        twitter={{
          handle: '@onemandal',
          site: '@onemandal',
          cardType: 'summary_large_image',
        }}
      />
      ;
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
