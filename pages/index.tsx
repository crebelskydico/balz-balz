import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import MainLayout from '../layouts/MainLayout';
import { getAllContent } from '../utils/content';
import SEO from '../components/seo';
import Main from '../components/Main';

import { ParsedUrlQuery } from 'querystring';

type FeatureTypes = {
  absenceFeature: boolean;
}
interface ContentPropTypes {
  data: {
    meta: {
      title: string;
      path: ParsedUrlQuery['path'];
    };
    content: string;
  }[];
}

const BASE_CLASS = 'BB';
const PAGE_CONFIG: FeatureTypes = {
  absenceFeature: false
};

const Home = ({ ...props }: ContentPropTypes) => {
  const router = useRouter();
  const { path } = router.query;

  const filteredContent = props.data.filter(
    (item) => item.meta.path === path
  )[0];  

  useEffect(() => {
    if (typeof window !== 'undefined' && PAGE_CONFIG.absenceFeature) {
      if (localStorage.getItem('absence') !== 'viewed') {
        router.push('/absence');
      }
      localStorage.setItem('absence', 'viewed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SEO title={filteredContent?.meta.title} />
      <MainLayout>
        <Main title={filteredContent?.meta.title} content={filteredContent?.content} path={path} BASE_CLASS={BASE_CLASS}/>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await getAllContent();
  return {
    props: {
      data: content,
    },
  };
};

export default Home;
