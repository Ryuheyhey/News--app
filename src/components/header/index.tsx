import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext, useState } from "react";
import { ToggleContext, ToggleProvider } from "../../context/toggleContext";

const Header = () => {
  const toggle = useContext(ToggleContext);
  const open = toggle.open;
  const setOpen = toggle.setOpen;

  const handleToggle = useCallback(() => {
    setOpen(!open);
    console.log(open);
  }, [open]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon} onClick={() => handleToggle()}>
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={`35`}
            priority
          />
        </div>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
};

export default Header;
