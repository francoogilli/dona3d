// email-template.tsx
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
  <div>
    <h1>Hola, {firstName} {lastName}!</h1>
    <p>Correo electrónico: {email}</p>
    <p>Mensaje: {message}</p>
    <button className="bg-sky-500 px-4 py-2">
      <a href="https://francogilli.vercel.app/">Ir a la página</a>
    </button>
  </div>
);
