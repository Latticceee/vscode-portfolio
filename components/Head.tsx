import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Omar is an aspiring Mathematician, and Coder. He loves to build stuff"
      />
      <meta
        name="keywords"
        content="Omar Said, Omar Mohamed, Math, web dev, Omar web developer, developer, Egypt, portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Omar Said's Portofolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Omar Said',
};
