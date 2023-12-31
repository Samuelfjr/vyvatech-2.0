import siteConfig from "@/config/site";

export default function Head() {
  return (
    <>
      <title>{`${siteConfig.name} | Design e Tecnologia`}</title>

      <meta name="description" content={siteConfig.description} />

      <meta name="keywords" content="pro.gg, links pro" />

      <meta name="author" content="Igor Souza" />
      <meta name="author" content="https://igorsouza.me" />

      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="black"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="white"
      />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:image" content={siteConfig.ogImage} />
      <meta name="twitter:creator" content="@igaoexp" />

      {/* Icons */}

      <link rel="icon" href="/favicon.ico" />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Manifest */}

      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
