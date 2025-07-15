import fs from 'fs/promises';
import path from 'path';
import QuoteCard from '@/components/QuoteCard';
import { Quote } from '@/types';
import styles from '@/styles/QuotesPage.module.css';
interface QuotesPageProps {
  quotes: Quote[];
}

const QuotesPage = ({ quotes }: QuotesPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>My Favorite Quotes</h1>
        <p className={styles.pageSubtitle}>
          A collection of quotes I read more than once. Quotes can be understood diffrently, maybe the one who get it exactly right is the writer himself.
        </p>
      </div>

      {/* We've removed the GitHub profile and calendar sections */}

      <div className={styles.reposContainer}> {/* We can reuse this grid style */}
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch quotes from your local JSON file
  const filePath = path.join(process.cwd(), 'data', 'quotes.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const quotes = JSON.parse(jsonData);

  return {
    props: { quotes },
  };
}

export default QuotesPage;