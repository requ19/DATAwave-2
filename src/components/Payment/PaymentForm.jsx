// src/components/Payment/PaymentForm.jsx
// Форма оплаты — инициирует платёж и редиректит на PayHub HPP

import React, { useState } from 'react';
import { initiatePayment } from '../../api/payhub';
import styles from './PaymentForm.module.scss';

const PAYHUB_BASE = process.env.REACT_APP_PAYHUB_HPP_BASE || 'https://idm.ctechnology.kg';

const PaymentForm = ({
  // Предзаполненные данные (например из тарифа)
  defaultAmount = '',
  defaultDescription = '',
  defaultCustomerId = '',
  defaultCustomerEmail = '',
  // Колбэки
  onSuccess,
  onError,
}) => {
  const [form, setForm] = useState({
    amount: defaultAmount,
    description: defaultDescription,
    customerId: defaultCustomerId,
    customerEmail: defaultCustomerEmail,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Уникальный ID транзакции — можно заменить на ID заказа из БД
      const merchantTransactionId = `TXN-${Date.now()}`;

      const result = await initiatePayment({
        merchantTransactionId,
        amount: parseFloat(form.amount),
        currency: 'KGS',
        customerId: form.customerId || undefined,
        customerEmail: form.customerEmail || undefined,
        description: form.description,
        // После оплаты PayHub редиректит сюда
        successUrl: `${window.location.origin}/payment/success?txn=${merchantTransactionId}`,
        failUrl: `${window.location.origin}/payment/fail?txn=${merchantTransactionId}`,
        language: 'RU',
        merchantData: JSON.stringify({ source: 'datawawe-site' }),
      });

      if (onSuccess) onSuccess(result);

      // Редирект на Hosted Payment Page PayHub
      window.location.href = result.hppUrl;
    } catch (err) {
      const message = err.message || 'Ошибка при инициации платежа';
      setError(message);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Оплата услуг Datawave</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="amount">Сумма (KGS)</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="1"
            step="0.01"
            placeholder="Например: 1500"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Описание</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Оплата тарифа Сонун 300"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="customerEmail">Email</label>
          <input
            id="customerEmail"
            name="customerEmail"
            type="email"
            placeholder="your@email.com"
            value={form.customerEmail}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="customerId">Лицевой счёт (ID абонента)</label>
          <input
            id="customerId"
            name="customerId"
            type="text"
            placeholder="Ваш номер абонента"
            value={form.customerId}
            onChange={handleChange}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Подождите...' : 'Перейти к оплате'}
        </button>

        <p className={styles.note}>
          Вы будете перенаправлены на защищённую страницу оплаты Demirbank
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
