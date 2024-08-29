import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: 'getting-started',
    description: (
      <>
        Your go-to resource for initiating your journey with NEAR Protocol.
      </>
    ),
  },
  {
    title: 'Developing on NEAR',
    Svg: 'developing-on-near',
    description: (
      <>
        Information on developing on the NEAR Ecosystem.
      </>
    ),
  },
  {
    title: 'FastAuth',
    Svg: 'fastauth',
    description: (
      <>
        Navigating FastAuth on NEAR.
      </>
    ),
  },
  {
    title: 'Issues + Troubleshooting',
    Svg: 'issues--troubleshooting',
    description: (
      <>
        Information regarding any reported issues, resolutions, and updates related to our products.
      </>
    ),
  },
  {
    title: 'Managing your NEAR Wallet and Security',
    Svg: 'managing-your-near-wallet-and-security',
    description: (
      <>
        This section serves as historical reference, as the NEAR Wallet (wallet.near.org) is no longer supported.
      </>
    ),
  },
  {
    title: 'NEAR Apps Support & Contact',
    Svg: 'near-apps-support--contact',
    description: (
      <>
        Apps on NEAR Support Contact Information.
      </>
    ),
  },
  {
    title: 'NEAR Exchange Support & Contact',
    Svg: 'near-exchange-support--contact',
    description: (
      <>
        Get contact details for NEAR Exchanges and their Customer Support.
      </>
    ),
  },
  {
    title: 'NEAR Wallet Specific Support',
    Svg: 'near-wallet-specific-support',
    description: (
      <>
        Need help with your NEAR Wallet? Find support contact details for specific wallets in this section.
      </>
    ),
  },
  {
    title: 'NEAR Community',
    Svg: 'near-community',
    description: (
      <>
        If your question isn't answered in the FAQ, check our community channels!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
     <div class="theme-admonition theme-admonition-tip admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--info">
      <a href={`category/${Svg}`}>
        <Heading as="h3">{title}</Heading>
      </a>
     </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
