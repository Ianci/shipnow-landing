import { PropTypes } from 'prop-types';
import Head from 'next/head';
const Layout = ({ title = '', description, content, children, key = 'desc' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta 
        name={description} 
        content={content} 
        key={key} />
      </Head>
      <header>
        <div className="">navbar soon</div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="">footer soon</div>
      </footer>
    </>
  );
};

export default Layout;

