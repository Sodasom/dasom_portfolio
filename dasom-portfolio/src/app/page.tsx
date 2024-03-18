import Image from "next/image";

import Header from "./components/common/Header";
import MainLayout from "./layouts/MainLayout";
import Site from "./components/common/Site";

export default function Main() {
  return (
    <>
      <Header />
      <MainLayout>
        <div>
          <div className="flex flex-col gap-2 mb-10 md:gap-4 md:mb-[4.625rem]">
            <p className="main_description">안녕하세요,</p>
            <p className="text-[2.5rem] font-extrabold text-base-black md:text-[4rem]">
              도전을 즐기는
            </p>
            <p className="main_description">
              FRONTEND DEVELOPER 소다솜 입니다.
            </p>
          </div>
          <Site />
          <div className="absolute right-0 bottom-0 -z-10">
            <Image
              width={560}
              height={560}
              src="/images/꽃카.jpg"
              alt="꽃카캐릭터이미지"
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
