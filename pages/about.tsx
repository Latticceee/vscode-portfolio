import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Omar Said</h1>
        <div className={styles.subtitle}>Idk but defniitly sth cool</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a high school studet from Giza, Egypt. I am a problem solver, Builder and a Researhcer.
              <span className={styles.highlight}>worked on four capstone prpject tackling SDGs, Multimple websites to help my community, and researched 
              the N-body problem, Matrix-Tree theorem, and What F1 cars can do</span>.
            </p>
            <p className={styles.paragraph}>
              As much as I love to learn, I also love to mentor outside academia
              you&apos;ll find me Wathcing movies, listining to music or playing chess.
            </p>            
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>At School</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Dakahlia STEM School</span> a boarding school. 
              I worked on four capstone projects in teams, controlling floods, generating electricity,
              purifying air, and water. For the first challenge, we build a water dam and a Solar panel from IR LEDs,
              air purifier from Zeolite Na-x, Water purifier from multiple recyled sources, respectively.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the School's Math club for a year now focusing more
              on the Math Circle, and web devolpment. I am the CEO and cheif editor at the my school's English magazine,
              the biggest in the country. I led the skies observatory day at my school and played for the basket ball team.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Competitioms</h2>
            <p className={styles.paragraph}>
              I took apart in multiple competitionsd the pleasure to be associated with the follwoing institutions rather than school{' '}
              <span className={styles.highlight}>Euler Circle</span>,{' '}
              <span className={styles.highlight}>STEM Astronomy Club</span>,{' '}
              <span className={styles.highlight}>Global society for young phsyicists</span>,{' '}
              <span className={styles.highlight}>Intro 2 Astro Research</span>,{' '}
              <span className={styles.highlight}>Your big year</span> 
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Internships</h2>
            <p className={styles.paragraph}>
              I have had two unpaid Internships, One with <span className={styles.highlight}>International Group for Paper Trading (IGPP)</span>
              , I worked with my dad in his office for 3 months during the summer of 2024. The most pooring things was to check balances but the most exciting part was doing the company's presentations.
              My second Internship was at <span className={styles.highlight}>Orman Language School</span> where I held after school Math Classes for middle scholars during this summer.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Competitioms</h2>
            <p className={styles.paragraph}>
              I took apart in multiple competitions including{' '}
              <span className={styles.highlight}>ISEF</span>,{' '}
              <span className={styles.highlight}>Nasa Space Apps</span>,{' '}
              <span className={styles.highlight}>EMO</span>,{' '}
              <span className={styles.highlight}>EAO</span>,{' '}
              <span className={styles.highlight}>International Math bowl</span>,{' '}
              <span className={styles.highlight}>IOT Challenge</span>,{' '}
              <span className={styles.highlight}>Polaris youth compeitition</span> 
            </p>
            <p className={styles.paragraph}>
              I&apos;ve made it to the Internation Math Olympiad National team, got 2nd place in the International Math bowl, 
              and finished as a finalist in the National Astronomy olympiad and polaris competition.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Voluntering</h2>
            <p className={styles.paragraph}>
              I voluntered with multimple charities and started <span className={styles.highlight}>Green & Blue</span>.
              I led this organization for 2 years now, we planted more than 400 trees in Dakahlia & Giza. Also we cleaned the beach 
              near our school every week in the acaddmic year.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
