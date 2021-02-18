import { ToggleProvider } from "../context/toggleContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ToggleProvider>
      <Component {...pageProps} />
    </ToggleProvider>
  );
}

export default MyApp;
