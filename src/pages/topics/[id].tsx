import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import Article from "../../components/article";
import Nav from "../../components/nav";
import MainLayout from "../../layouts/index";
import { getTopics } from "../../lib/api";
import styles from "../../styles/Home.module.scss";
import { ToggleContext } from "../../context/toggleContext";

function Topic(props) {
  const router = useRouter();

  const toggle = useContext(ToggleContext);
  const open = toggle.open;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(router.query);

  return (
    <MainLayout>
      <Head>
        <title>Simple News - {props.title.toUpperCase()}</title>
      </Head>
      <div className={styles.contents}>
        <div className={open ? styles.nav : styles.nav__none}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} style={{ marginRight: "10%" }}>
          <Article title={props.title} articles={props.topicArticles} />
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = () => {
  const topics = ["business", "technology", "entertaiment", "sports"];
  const paths = topics.map((topic) => ({
    params: {
      id: topic,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topics = await getTopics({ params });

  return {
    props: {
      topicArticles: topics.topicArticles,
      title: topics.title,
    },
    revalidate: 60 * 10,
  };
};

export default Topic;
