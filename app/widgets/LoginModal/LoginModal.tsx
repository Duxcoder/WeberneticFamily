import { FormEvent, useState } from 'react';
import styles from './LoginModal.module.css';
import Image from 'next/image';
import BaseButton from '@/app/shared/ui/button';

export default function LoginModal({ setShowModal }: { setShowModal: (value: boolean) => void }) {
  const handleCloseModal = () => setShowModal(false);

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Your login:  ${emailOrPhone};\nYour password: ${password};\nRememberPassword: ${rememberMe}`,
    );
  };

  return (
    <section className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button onClick={handleCloseModal} className={styles.close}>
          <Image src="/close.svg" alt="close" width="24" height="24" />
        </button>
        <h1 className={styles.title}>Войти в систему</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.fieldWrapper}>
            <input
              id="emailOrPhone"
              className={styles.field}
              type="text"
              placeholder="Email/Телефон"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <input
              id="password"
              className={styles.field}
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              id="rememberMe"
              className={styles.rememberMeCheckbox}
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className={styles.rememberMe}>
              Запомнить пароль
            </label>
          </div>
          <button
            type="button"
            className={styles.forgotButton}
            onClick={() => alert('Восстановление пароля')}>
            Восстановить
          </button>
          <div className={styles.buttonWrapper}>
            <BaseButton type="submit" style="login-dark">
              Войти
            </BaseButton>
            <BaseButton type="submit" style="login-light">
              Зарегистрироваться
            </BaseButton>
          </div>
        </form>
      </div>
    </section>
  );
}
