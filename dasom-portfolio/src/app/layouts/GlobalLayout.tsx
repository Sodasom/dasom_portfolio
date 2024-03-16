import { ILayoutProps } from "../interface/Layout.interface";

export default function GlobalLayout({ children }: ILayoutProps) {
  return <div className="w-full h-screen">{children}</div>;
}
