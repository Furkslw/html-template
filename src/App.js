import React from 'react';
import PaymentReport from './PaymentReport';
import PaymentReport2 from './PaymentReport2';

const App = () => {
  const data = [
    { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },
    { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },  { id: 1, name: 'Veri 1', current_account: { name: 'Hesap 1' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 1000, type: 'INCOME', status: 'PENDING' },
    { id: 2, name: 'Veri 2', current_account: { name: 'Hesap 2' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 2000, type: 'EXPENSE', status: 'PAID' },
    { id: 3, name: 'Veri 3', current_account: { name: 'Hesap 3' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 3000, type: 'INCOME', status: 'CANCELLED' },
    { id: 4, name: 'Veri 4', current_account: { name: 'Hesap 4' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 4000, type: 'EXPENSE', status: 'PAID' },
    { id: 5, name: 'Veri 5', current_account: { name: 'Hesap 5' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 5000, type: 'INCOME', status: 'PENDING' },
    { id: 6, name: 'Veri 6', current_account: { name: 'Hesap 6' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 6000, type: 'EXPENSE', status: 'PAID' },
    { id: 7, name: 'Veri 7', current_account: { name: 'Hesap 7' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 7000, type: 'INCOME', status: 'CANCELLED' },
    { id: 8, name: 'Veri 8', current_account: { name: 'Hesap 8' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 8000, type: 'EXPENSE', status: 'PAID' },
    { id: 9, name: 'Veri 9', current_account: { name: 'Hesap 9' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 9000, type: 'INCOME', status: 'PENDING' },
    { id: 10, name: 'Veri 10', current_account: { name: 'Hesap 10' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 10000, type: 'EXPENSE', status: 'PAID' },
    { id: 11, name: 'Veri 11', current_account: { name: 'Hesap 11' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 11000, type: 'INCOME', status: 'CANCELLED' },
    { id: 12, name: 'Veri 12', current_account: { name: 'Hesap 12' }, createdAt: '2024-06-27T12:08:43.546Z', due_date: '2024-07-27T12:08:43.546Z', amount: 12000, type: 'EXPENSE', status: 'PAID' },

  ];

  const company = {
    name: 'Panelbu Teknoloji A.Ş.',
    address: 'İstanbul, Türkiye',
    email: 'info@panelbu.com',
    taxNumber: '1234567890'
  };

  const pageSize = 16;
  const firstPageData = data.slice(0, pageSize);
  const remainingData = data.slice(pageSize);

  const renderReports = () => {
    let reports = [];

    // Render first page with up to 16 entries
    reports.push(<PaymentReport key={1} company={company} data={firstPageData} />);

    // Render remaining entries in groups of 20 for PaymentReport2
    for (let i = 0; i < remainingData.length; i += 19) {
      const pageData = remainingData.slice(i, i + 19);
      reports.push(<PaymentReport2 key={i / 19 + 2} data={pageData} />);
    }

    return reports;
  };

  return (
    <div>
      {renderReports()}
    </div>
  );
};

export default App;