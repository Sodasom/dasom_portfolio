import { ILayoutProps } from "../interface/Layout.interface";

export default function MainLayout({ children }: ILayoutProps) {
  return (
    <main className="h-full pt-[2.75rem] px-5 md:pt-[4.5rem] md:px-[8.75rem]">
      {children}
    </main>
  );
}
