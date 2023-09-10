import { useEffect } from "react";

const useHeader = (title, home) => {
  useEffect(() => {
    if (home) {
      document.querySelector("head").innerHTML += `
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?
            id=G-2KMQN195TE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-2KMQN195TE");
        </script>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1"
        />
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex, nofollow" />
        <!-- Styles  -->
        <!-- Primary Meta Tags -->
        <title>${title} || Coming Soon</title>
        <meta name="title" content="${title} || Coming Soon" />
        <meta name="description" content="{{PAGE DESC}}" />
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="{{URLL}}" />
        <meta property="og:url" content="{{URLL}}" />
        <meta property="og:title" content="${title} || Coming Soon" />
        <meta property="og:site_name" content="${title} || Coming Soon" />
        <meta property="og:description" content="{{PAGE DESC}}" />
        <meta property="og:image" content="{{PAGE SEO IMG}}" />
        <meta property="og:image:secure_url" content="{{PAGE SEO IMG}}" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="{{PAGE DESC}}" />
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="{{URLL}}" />
        <meta property="twitter:title" content="${title} || Coming Soon" />
        <meta property="twitter:description" content="{{PAGE DESC}}" />
        <meta property="twitter:image" content="{{PAGE SEO IMG}}" />
        <meta property="twitter:image:alt" content="{{PAGE DESC}}" />
        <!-- Schema.org for Google -->
        <meta itemprop="image" content="{{PAGE SEO IMG}}" />
        <meta itemprop="name" content="${title} || Coming Soon" />
        <meta itemprop="description" content="{{PAGE DESC}}" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#333333" />`;
    }
    // document.querySelector("head title").innerHTML = title;
  }, []);
};

export default useHeader;
