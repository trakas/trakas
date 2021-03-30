import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_web_development_w2vv.svg",
    description: (
      <>
        We always keep all APIs as simple and straightforward as a piece of cake. With this great documentations, you
        can quickly get started.
      </>
    ),
  },
  {
    title: "A Better Place for Reference",
    imageUrl: "img/undraw_collecting_fjjl.svg",
    description: (
      <>This is a library, like a collection of code. It's enhance usability with the customization of our ideas</>
    ),
  },
  {
    title: "High Standard of Quality",
    imageUrl: "img/undraw_open_source_1qxw.svg",
    description: (
      <>
        Utilize the power of <Link to="/docs/#how-about-the-quality">open-source projects and services</Link>; we can
        ensure that Trakas always meets the standard of a high-quality open-source project.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
