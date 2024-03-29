import './globals.css';
import { Providers } from '../components/providers'
import type { Metadata } from 'next';

import Header from 'src/components/header';
import HeaderMobile from 'src/components/header-mobile';
import MarginWidthWrapper from 'src/components/margin-width-wrapper';
import PageWrapper from 'src/components/page-wrapper';
import Footer from 'src/components/footer';


export const metadata: Metadata = {
  title: 'Dona 3D - Impresion 3D',
  description: 'Explora el emocionante mundo de la impresión 3D con Dona 3D! Desde prototipos hasta obras de arte, nuestra plataforma te ofrece la oportunidad de dar vida a tus ideas tridimensionales. Con tecnología de vanguardia y un enfoque en la calidad y la precisión, Dona 3D te acompaña en cada paso del proceso de impresión, desde el diseño hasta el producto final. ¡Desata tu creatividad y haz realidad tus proyectos con Dona 3D!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`bg-white dark:bg-[#050505] `}>
        <Providers>
        <div className="absolute dark:hidden inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div> 
        <div className="absolute hidden dark:block inset-0 -z-10 h-full w-full bg-[#050505] bg-[linear-gradient(to_right,#0b0b0b_1px,transparent_1px),linear-gradient(to_bottom,#0b0b0b_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#04131d,transparent)]"></div></div>
          <div className="flex">
            <main className="flex-1">
              <Header />
              <MarginWidthWrapper>
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
                <Footer />
              </MarginWidthWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
