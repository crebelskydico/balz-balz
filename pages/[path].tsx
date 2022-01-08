import { useContext, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../layouts/MainLayout';
import { MenuContext } from '../components/MenuContext';
import SEO from '../components/seo';
import Main from '../components/Main';

import path from 'path';
import { getContentByPath, getContentPaths } from '../utils/content';
export const contentDirectory = path.join(process.cwd(), 'content');

type ContentPropTypes = {
  data: {
    meta: {
      title: string;
      path: ParsedUrlQuery['path'];
    };
    content: string;
  };
};

export interface pathParamType extends ParsedUrlQuery {
  path: string;
}

const BASE_CLASS = 'BB';

const Overlay = (props: ContentPropTypes) => {
  const {toggleMenu } = useContext(MenuContext);
  const {toggleOverlay } = useContext(MenuContext);

  useEffect(() => {
    toggleMenu(true);
    toggleOverlay(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <SEO title={props?.data?.meta?.title} />
      <MainLayout>
        <Main path={props?.data?.meta?.path} title={props?.data?.meta?.title} content={props?.data?.content} BASE_CLASS={BASE_CLASS}/>       
      </MainLayout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getContentPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ ...context }) => {
  const { path } = context.params as pathParamType;
  const contentByPath = await getContentByPath(path);

  return {
    props: {
      data: contentByPath,
    },
  };
};

export default Overlay;
