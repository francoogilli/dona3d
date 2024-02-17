import React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
    <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>¡Hola, Rafael!</h1>
    <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px', textAlign: 'center' }}>¡Tienes un nuevo mensaje!</p>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Detalles del mensaje:</h2>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}><strong>Nombre:</strong> {firstName} {lastName ? lastName : ''}</p>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}><strong>Correo:</strong> {email}</p>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}><strong>Mensaje:</strong> {message}</p>
    </div>
  </div>
);
