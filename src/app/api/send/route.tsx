import { NextRequest,NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "src/components/email-template";
const resend = new Resend('re_ehVJ58z1_KxCJr65KezmCdRwSb4G6bQhM');

export async function POST(request: NextRequest) {
    try {
      const { firstName, lastName, email, message } = await request.json();
      // Aquí puedes usar los datos recolectados para enviar el correo electrónico o hacer lo que necesites con ellos
      console.log('Datos del formulario:', { firstName, lastName, email, message });
  
      // Luego puedes enviar el correo electrónico con los datos del formulario
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['francogilli10@gmail.com'],
        subject: 'Email para Dona 3D',
        react: <EmailTemplate firstName={firstName} lastName={lastName} email={email} message={message} />,
        text: 'Hola desde Resend y Next.js',
      });
  
      console.log(data);
      return NextResponse.json({ message: 'Email enviado' });
    } catch (error) {
      console.error('Error en el envío del correo electrónico:', error);
      return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
  }
  