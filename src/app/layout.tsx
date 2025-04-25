import type { Metadata } from 'next';
import type { NextFont } from 'next/dist/compiled/@next/font';

import './style/globals.css';
import { Inter } from 'next/font/google';

import Header from '@/widgets/header';
import { Toaster } from '@/shared/components/ui/toaster';
import ReactQueryProvider from '@/providers/query-provider';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TeRoNet | Business Practice',
  description:
    'TeRoNet - платформа для поиска работы и найма специалистов в IT. Свяжитесь с работодателями и соискателями, публикуйте вакансии и находите лучшие таланты.',
  keywords: [
    'работа в IT',
    'поиск сотрудников',
    'вакансии IT',
    'найм в IT',
    'IT рекрутинг',
    'TeRoNet',
    'технологии',
    'карьера в IT',
  ],
  openGraph: {
    title: 'TeRoNet: Найдите работу и сотрудников в сфере технологий',
    description:
      'TeRoNet - платформа для поиска работы и найма специалистов в IT. Свяжитесь с работодателями и соискателями, публикуйте вакансии и находите лучшие таланты.',
    url: 'https://teronet.vercel.app/',
    siteName: 'TeRoNet',
    images: [
      {
        url: 'https://teronet.vercel.app/images/teronet-logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          {children}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
