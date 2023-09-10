import { useEffect } from "react";

const useHeader = (title, home) => {
  useEffect(() => {
    if (home) {
      document.querySelector("head").innerHTML += `
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

    // Define the URLs of the external and inline scripts

    // Function to check if an inline script already exists
    function inlineScriptExists() {
      const scripts = document.head.getElementsByTagName("script");
      for (const script of scripts) {
        if (script.textContent.includes("window.dataLayer")) {
          return true;
        }
      }
      return false;
    }

    // Check if the inline script already exists
    if (!inlineScriptExists()) {

      const metaElement = document.createElement("meta");
      metaElement.name = "google-site-verification";
      metaElement.content = "sHas6c0W7IzfBOzq4cIoylswRX44DDbLGmYEqXWw09g";

      // Create a new script element for the inline script
      const inlineScriptElement = document.createElement("script");

      // Add the inline script content
      inlineScriptElement.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-2KMQN195TE");
        `;

      // Insert the inline script element at the beginning of the head tag
      const head = document.head || document.getElementsByTagName("head")[0];
      // head.insertBefore(metaElement, head.firstChild);
      head.appendChild(metaElement);

      head.insertBefore(inlineScriptElement, head.firstChild);
    }

    const gtmScriptUrl =
      "https://www.googletagmanager.com/gtag/js?id=G-2KMQN195TE";

    // Function to check if a script with a specific src attribute exists in the head
    function scriptExists(src) {
      const scripts = document.head.getElementsByTagName("script");
      for (const script of scripts) {
        if (script.src === src) {
          return true;
        }
      }
      return false;
    }

    // Check if the external script already exists
    if (!scriptExists(gtmScriptUrl)) {
      // Create a new script element for the external script
      const externalScriptElement = document.createElement("script");
      externalScriptElement.async = true;
      externalScriptElement.src = gtmScriptUrl;

      // Insert the external script element at the beginning of the head tag
      const head = document.head || document.getElementsByTagName("head")[0];
      head.insertBefore(externalScriptElement, head.firstChild);
    }
  }, []);
};

export default useHeader;
