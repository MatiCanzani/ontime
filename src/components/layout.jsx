import React from "react";
import "../styles/main.scss";
import Helmet from "react-helmet";
import Header from "./Header/Header";
import Cursor from "../../utils/cursor/index";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>On Time Creative</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1258282558902220');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1258282558902220&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Helmet>

      <div className="background">
        <div className="background1"></div>
        <div className="background2"></div>
        <div className="background3"></div>
      </div>
      <div className="container-fluid">
        <Header />
        <Cursor />
        {children}
      </div>
    </>
  );
};

export default Layout;
