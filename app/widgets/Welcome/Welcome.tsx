import BaseButton from '@/app/shared/ui/button';
import styles from './Welcome.module.css';
import Image from 'next/image';

export default function Welcome({ setShowModal }: { setShowModal: (value: boolean) => void }) {
  const handleButtonClick = () => setShowModal(true);

  return (
    <section className={styles.welcome}>
      <div className={styles.content}>
        <h1 className={styles.title}>Демо-версия</h1>
        <p className={styles.textContent}>
          За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних
          и малых проектов. Используя знания и накопленный опыт мы можем предложить
        </p>
        <BaseButton onClick={handleButtonClick}>Попробовать бесплатно</BaseButton>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/computer.png"
          alt="Computer"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
