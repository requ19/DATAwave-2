// src/pages/PaymentResult.jsx
// Страницы результата оплаты (/payment/success и /payment/fail)

import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getTransactionStatus } from '../api/payhub';
import styles from './PaymentResult.module.scss';

// ─── Success Page ─────────────────────────────────────────────────────────────

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const txnId = searchParams.get('txn');

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!txnId) return;
    getTransactionStatus(txnId)
      .then(setTransaction)
      .catch((err) => console.error('Could not load transaction:', err.message))
      .finally(() => setLoading(false));
  }, [txnId]);

  return (
    <div className={styles.page}>
      <div className={`${styles.card} ${styles.success}`}>
        <div className={styles.icon}>✓</div>
        <h1>Оплата прошла успешно!</h1>
        <p>Ваш платёж обработан. Интернет будет подключён в ближайшее время.</p>

        {loading && <p className={styles.loading}>Загрузка деталей...</p>}

        {transaction && (
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span>ID транзакции</span>
              <code>{transaction.merchantTransactionId}</code>
            </div>
            <div className={styles.detailRow}>
              <span>Сумма</span>
              <strong>{transaction.amount} {transaction.currency || 'KGS'}</strong>
            </div>
            <div className={styles.detailRow}>
              <span>Статус</span>
              <span className={styles.statusSuccess}>SUCCESS</span>
            </div>
          </div>
        )}

        <button className={styles.homeBtn} onClick={() => navigate('/')}>
          На главную
        </button>
      </div>
    </div>
  );
};

// ─── Fail Page ────────────────────────────────────────────────────────────────

export const PaymentFail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const txnId = searchParams.get('txn');

  return (
    <div className={styles.page}>
      <div className={`${styles.card} ${styles.fail}`}>
        <div className={styles.iconFail}>✕</div>
        <h1>Оплата не выполнена</h1>
        <p>Платёж был отклонён или отменён. Проверьте данные карты и попробуйте снова.</p>

        {txnId && (
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span>ID транзакции</span>
              <code>{txnId}</code>
            </div>
          </div>
        )}

        <div className={styles.failActions}>
          <button className={styles.retryBtn} onClick={() => navigate(-1)}>
            Попробовать снова
          </button>
          <button className={styles.homeBtn} onClick={() => navigate('/')}>
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};
