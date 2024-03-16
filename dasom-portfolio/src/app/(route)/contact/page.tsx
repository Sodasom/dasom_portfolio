import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/common/Header";
import MainLayout from "@/app/layouts/MainLayout";

export default function Contact() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="h-full flex justify-center items-center">
          <div className="contact_card">
            <div className="flex flex-col mt-[18.75rem] mb-6 text-base-white md:mt-0">
              <span className="text-2xl font-bold ">소다솜</span>
              <span className="font-medium">So dasom</span>
            </div>
            <p className="font-medium mb-[6rem] text-base-gray400">
              Frontend Developer
            </p>
            <div className="font-medium text-base-white">
              <address className="not-italic">1219dasom@gmail.com</address>
              <Link href="tel: 010-6636-9024">010-6636-9024</Link>
            </div>
            <Image
              width={60}
              height={60}
              src="/images/cow.png"
              alt="소 아이콘"
              className="absolute top-6 right-6 md:top-[15.375rem]"
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
