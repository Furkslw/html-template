import React from 'react';
import './PaymentReport2.css';

const PaymentReport2 = ({ data }) => {
  return (
    <div className="container">
    <div className="header2">
     
          <img src="https://www.panelbu.com/Logo.svg" alt="Panelbu Logo" width="100px" className="logo" />
       
         
        
        
      </div>
   <div className="table-container">
      <table id="payment-table" className='table2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>ADI</th>
            <th>CARİ HESAP</th>
            <th>O. TARİHİ</th>
            <th>V. TARİHİ</th>
            <th>TUTAR</th>
            <th>TİP</th>
            <th>DURUM</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.current_account.name}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>{item.due_date ? new Date(item.due_date).toLocaleDateString() : '-'}</td>
              <td>{item.amount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</td>
              <td>
                <span className={`status-badge ${item.type === 'INCOME' ? 'income' : 'expense'}`}>
                  {item.type === 'INCOME' ? 'Gelir' : 'Gider'}
                </span>
              </td>
              <td>
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status === 'PAID' ? 'Ödendi' : item.status === 'CANCELLED' ? 'İptal Edildi' : 'Beklemede'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="footer">
        <div className="footer-left">
          *Bu doküman PanelBU tarafından oluşturulmuştur.
        </div>
        <div className="footer-right">
          <div className="footer-text-section">
            <span className="footer-text">İhtiyacın Olan Tek</span>
          </div>
          <img src="../footer-image.svg" alt="Panelbu Logo" width="42px" className="logo-footer" />
          <div className="page-number">
            <span className="current-page">2/2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReport2;
