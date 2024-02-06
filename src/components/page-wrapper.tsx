import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-white/75 dark:bg-[#050505] flex-grow pb-4">
      {children}
    </div>
  );
}