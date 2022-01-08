import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  path?: string;
  title: string;
}

const SEO = ({ ...props }: IParams) => (
  <Head>
    <title>{`${props.title ? props.title + ' | ' : ''}Balz und Balz`}</title>
  </Head>
);

export default SEO;
