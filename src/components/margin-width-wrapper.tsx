import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (/*w-full mx-auto lg:w-10/12 px-3.5 md:px-0*/
    <div className="flex flex-col mx-auto  lg:w-10/12  min-h-screen">
      {children}
    </div>
  );
}