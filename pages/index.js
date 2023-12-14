import Head from "next/head";
import Animation from "../components/Animation";
import Footer from "../components/elements/Footer";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Readme Maker</title>
        <meta name="title" content="GitHub Profile Maker" />
        <meta
          name="description"
          content="Best Readme Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta name="copyright" content="LTP" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GitHub Readme Maker"
        />
        <link rel="icon" href="/logo.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9FEXPTFC17', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* Fonts in Head for Fast Serving */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-green-200">
        <NavBar />
        <HomePage />
        <Footer />
      </body>
    </>
  );
}
