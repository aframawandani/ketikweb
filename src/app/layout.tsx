import { PropsWithChildren } from "react";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./image/favicon.png" type="image/x-icon" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <link rel="stylesheet" type="text/css" href="./fonts/typography/fonts.css" />
        <link rel="stylesheet" href="./fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="./plugins/aos/aos.min.css" />
        <link rel="stylesheet" type="text/css" href="./plugins/fancybox/jquery.fancybox.min.css" />

        <link rel="stylesheet" type="text/css" href="./plugins/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
        <link rel="stylesheet" type="text/css" href="./css/demo.css" />
      </head>
      <body>
        {children}
        <Script src="/plugins/jquery/jquery.min.js"></Script>
        <Script src="/plugins/jquery/jquery-migrate.min.js"></Script>
        <Script src="/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="/plugins/inlineSvg/inlineSvg.min.js"></Script>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        <Script src="/plugins/fancybox/jquery.fancybox.min.js"></Script>
        <Script src="/plugins/aos/aos.min.js"></Script>
        <Script src="/plugins/isotope/isotope.pkgd.min.js"></Script>
        <Script src="/plugins/isotope/packery.pkgd.min.js"></Script>
        <Script src="/plugins/isotope/image.loaded.js"></Script>
        <Script src="/plugins/slick/slick.min.js"></Script>
        <Script src="/plugins/countdown/jquery.countdown.js" defer></Script>
        <Script src="/js/menu.js"></Script>
        <Script src="/js/custom.js"></Script>
      </body>
    </html>
  );
}
