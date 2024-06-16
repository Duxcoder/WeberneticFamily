import styles from './BaseButton.module.css';
import { ReactNode } from 'react';

export default function BaseButton({
  children,
  icon,
  onClick,
  type = 'button',
  style = 'default',
}: {
  children: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  style?: 'default' | 'login-dark' | 'login-light';
}) {
  return (
    <button type={type} className={`${styles.button} ${styles[style]}`} onClick={onClick}>
      <span className={styles.label}> {children}</span>
      {icon}
    </button>
  );
}
