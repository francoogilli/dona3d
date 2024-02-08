import './globals.css';
import { Providers } from '../components/providers'
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from 'src/components/header';
import HeaderMobile from 'src/components/header-mobile';
import MarginWidthWrapper from 'src/components/margin-width-wrapper';
import PageWrapper from 'src/components/page-wrapper';


const montserrat = Montserrat ({  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: "normal", subsets: ["latin"] });  

export const metadata: Metadata = {
  title: 'Dona 3D - Impresion 3D',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <Providers>
        <div className="absolute dark:hidden inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div> 
        <div className="absolute hidden dark:block inset-0 -z-10 h-full w-full bg-[#050505] bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#051724,transparent)]"></div></div>
          <div className="flex">
            <main className="flex-1">
              <Header />
              <MarginWidthWrapper>
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
