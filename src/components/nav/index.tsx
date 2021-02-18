import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import { FC } from "react";

const TOPICS = [
  {
    icon: "business",
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: "tech",
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: "entame",
    path: "/topics/entertaiment",
    title: "Entertaiment",
  },
  {
    icon: "sports",
    path: "/topics/sports",
    title: "Sports",
  },
];

const Nav: FC = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.contents}>
        <li>
          <Link href="/">
            <a>
              <span>
                <Image
                  src={"/img/navIcons/top.svg"}
                  alt={`top icon`}
                  loading="eager"
                  width={33}
                  height={33}
                  priority
                />
              </span>
              <span>{"Top stories"}</span>
            </a>
          </Link>
        </li>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index}>
              {/* <Link href={topic.path}> */}
              <Link href={"/topics/[id]"} as={`${topic.path}`}>
                <a>
                  <span>
                    <Image
                      src={`/img/navIcons/${topic.icon}.svg`}
                      alt={`${topic.title} icon`}
                      loading="eager"
                      width={33}
                      height={33}
                      priority
                    />
                  </span>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;
