// src/components/Payment/RefundForm.jsx
// Форма возврата средств (для admin-панели или личного кабинета)

import React, { useState, useEffect } from 'react';
import { refundPayment, listRefunds } from '../../api/payhub';
import styles from './RefundForm.module.scss';

const RefundForm = ({ sessionId, originalAmount, currency = 'KGS' }) => {
  const [refundAmount, setRefundAmount] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [refunds, setRefunds] = useState([]);
  const [loadingRefunds, setLoadingRefunds] = useState(false);

  // Загрузить историю возвратов
  const loadRefunds = async () => {
    if (!sessionId) return;
    setLoadingRefunds(true);
    try {
      const data = await listRefunds(sessionId);
      setRefunds(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to load refunds:', err.message);
    } finally {
      setLoadingRefunds(false);
    }
  };

  useEffect(() => {
    loadRefunds();
  }, [sessionId]);

  // Уже возвращено (сумма в KGS)
  const totalRefundedKgs = refunds
    .filter((r) => r.status === 'COMPLETED')
    .reduce((sum, r) => sum + r.amountCents / 100, 0);

  const refundableAmount = originalAmount - totalRefundedKgs;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const amountKgs = parseFloat(refundAmount);
    if (!amountKgs || amountKgs <= 0) {
      return setError('Введите сумму возврата');
    }
    if (amountKgs > refundableAmount) {
      return setError(`Максимальная сумма возврата: ${refundableAmount.toFixed(2)} ${currency}`);
    }

    setLoading(true);
    try {
      // API принимает сумму в ЦЕНТАХ (minor units)
      const amountCents = Math.round(amountKgs * 100);
      await refundPayment(sessionId, amountCents, reason);

      setSuccess(`Возврат ${amountKgs} ${currency} успешно выполнен`);
      setRefundAmount('');
      setReason('');
      await loadRefunds(); // Обновить историю
    } catch (err) {
      setError(err.message || 'Ошибка при выполнении возврата');
    } finally {
      setLoading(false);
    }
  };

  if (!sessionId) {
    return <div className={styles.empty}>Session ID не указан</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Возврат средств</h3>

      <div className={styles.info}>
        <div className={styles.infoRow}>
          <span>Session ID:</span>
          <code>{sessionId}</code>
        </div>
        <div className={styles.infoRow}>
          <span>Оригинальная сумма:</span>
          <strong>{originalAmount} {currency}</strong>
        </div>
        {totalRefundedKgs > 0 && (
          <div className={styles.infoRow}>
            <span>Уже возвращено:</span>
            <strong className={styles.refunded}>{totalRefundedKgs.toFixed(2)} {currency}</strong>
          </div>
        )}
        <div className={styles.infoRow}>
          <span>Доступно к возврату:</span>
          <strong className={styles.available}>{refundableAmount.toFixed(2)} {currency}</strong>
        </div>
      </div>

      {refundableAmount > 0 ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Сумма возврата ({currency})</label>
            <input
              type="number"
              min="0.01"
              max={refundableAmount}
              step="0.01"
              placeholder={`Максимум ${refundableAmount.toFixed(2)}`}
              value={refundAmount}
              onChange={(e) => { setRefundAmount(e.target.value); setError(null); }}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Причина (необязательно)</label>
            <input
              type="text"
              placeholder="Например: Отмена заказа клиентом"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.fullBtn}
              onClick={() => setRefundAmount(String(refundableAmount))}
              disabled={loading}
            >
              Вернуть всё ({refundableAmount.toFixed(2)} {currency})
            </button>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Выполняется...' : 'Выполнить возврат'}
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.fullyRefunded}>✓ Платёж полностью возвращён</div>
      )}

      {/* История возвратов */}
      <div className={styles.history}>
        <h4>История возвратов</h4>
        {loadingRefunds ? (
          <p className={styles.loading}>Загрузка...</p>
        ) : refunds.length === 0 ? (
          <p className={styles.empty}>Возвратов нет</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((r) => (
                <tr key={r.id}>
                  <td>{(r.amountCents / 100).toFixed(2)} {r.currency}</td>
                  <td>
                    <span className={`${styles.badge} ${r.status === 'COMPLETED' ? styles.badgeSuccess : styles.badgeCancelled}`}>
                      {r.status === 'COMPLETED' ? 'Выполнен' : 'Отменён'}
                    </span>
                  </td>
                  <td>{new Date(r.createdAt).toLocaleString('ru-RU')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RefundForm;
