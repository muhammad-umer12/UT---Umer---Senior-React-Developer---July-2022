import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container } from '@material-ui/core';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Welcome from '@/components/Welcome';

import { LayoutProps } from '@/types';

export default function Layout({
  title = 'this is website title',
  description = 'This is website description',
  keywords = 'some keywords',
  children,
}: LayoutProps) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Welcome />}
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </div>
  );
}
