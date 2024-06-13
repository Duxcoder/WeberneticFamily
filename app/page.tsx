'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Welcome from './widgets/Welcome';
import LoginModal from './widgets/LoginModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={styles.main}>
      {showModal ? (
        <LoginModal setShowModal={setShowModal} />
      ) : (
        <Welcome setShowModal={setShowModal} />
      )}
    </main>
  );
}
