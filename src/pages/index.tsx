import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import MainLayout from "../layouts/index";
import { GetStaticProps } from "next";
import { getNews, getPickup, getWeather } from "../lib/api";
import Article from "../components/article";
import Nav from "../components/nav";
import WetherNews from "../components/weather-news";
import PickupArticle from "../components/pickup-article";
import { ToggleContext } from "../context/toggleContext";
import { useContext } from "react";

const Home = (props) => {
  const toggle = useContext(ToggleContext);
  const open = toggle.open;

  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
      <div className={styles.contents}>
        <div className={open ? styles.nav : styles.nav__none}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="headlines" articles={props.topArticles} />
        </div>
        <div className={styles.aside}>
          <WetherNews weatherNews={props.weatherNews} />
          <PickupArticle articles={props.pickupArticles} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const news = await getNews();
  const weather = await getWeather();
  const pickup = await getPickup();

  return {
    props: {
      topArticles: news.topArticles,
      weatherNews: weather.weatherJson,
      pickupArticles: pickup.pickupArticles,
    },
    // 60*10秒たった後にリクエストがあれば再生成
    revalidate: 60 * 10,
  };
};
