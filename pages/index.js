import Layout from '../components/layout/Layout';
import { Button } from 'shipnow-mercurio';
import { sanityClient } from '../sanity';

export default function Home({ section }) {
  console.log(section);
  return (
    <>
      <Layout title="Shipnow - Tu estrategia, nuestra operación">
        <div className="">
          <h1>Index de la aplicación</h1>
          <Button>Botón</Button>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "section"]';
  const section = await sanityClient.fetch(query);

  if (!section.length) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        section,
      },
    };
  }
};
