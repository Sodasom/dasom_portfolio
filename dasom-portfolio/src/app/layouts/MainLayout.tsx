import { ILayoutProps } from "../interface/Layout.interface";

export default function MainLayout({ children }: ILayoutProps) {
  return (
    <main className="h-full pt-40 px-5 md:pt-60 md:px-[8.75rem]">
      {children}
    </main>
  );
}
