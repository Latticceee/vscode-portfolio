import { VscPerson } from 'react-icons/vsc';
import { Quote } from '@/types'; // We will define this type later
import styles from '@/styles/QuoteCard.module.css'; // You'll create this CSS file

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>"{quote.text}"</p>
      <div className={styles.author}>
        <VscPerson className={styles.icon} />
        <span>{quote.author}</span>
      </div>
    </div>
  );
};

export default QuoteCard;