import Head from "next/head";

// Meta data of website
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/neptune-logo-circle.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Neptune Agency",
  keywords: "Marketing, Neptune Agency, Social Media Marketing",
  description: "Welcome to the Neptune Marketing Agency website",
};

export default Meta;
