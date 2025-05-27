// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GameProvider } from "@/context/GameContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-QENJW6RRM8", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}