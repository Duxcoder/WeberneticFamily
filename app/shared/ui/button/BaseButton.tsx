import Image from 'next/image';
import styles from './BaseButton.module.css';

export default function BaseButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.label}> {children}</span>
      <Image src="/arrow.svg" alt="try free" width="36" height="36" className={styles.logo}/>
    </button>
  );
}
