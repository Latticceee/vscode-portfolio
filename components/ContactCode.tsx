import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'School email',
    href: 'Omar.1323047@stemdakahlia.moe.edu.eg',
  }, 
  {
    social: 'Email',
    link: 'Personal email',
    href: 'Omargemini6smiths@gmail.com',
  },
  {
    social: 'Github',
    link: 'Latticceee',
    href: 'https://github.com/Latticceee',
  },
  {
    social: 'Linkedin',
    link: 'Omar Said',
    href: 'https://www.linkedin.com/in/omar-said-473b06337/',
  },
    {
    social: 'Discord',
    link: 'thesmiths3',
    href: 'discordapp.com/users/1254105034850046044',
  },
      {
    social: 'Spotify',
    link: 'Omar Said',
    href: 'https://open.spotify.com/user/31hvwyie37djc7ifcpfgpgc2ipi4?si=a1f196656c9c4874',
  },
        {
    social: 'Aops',
    link: 'Latticceee',
    href: 'https://artofproblemsolving.com/community/user/<Latticceee>',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
