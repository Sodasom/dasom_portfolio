import Header from "@/app/components/common/Header";
import MainLayout from "@/app/layouts/MainLayout";
import TypingEffect from "@/app/components/about/TypingEffect";
import Site from "@/app/components/common/Site";
import AboutContent from "@/app/components/about/AboutContent";

import { ABOUT_LIST, WORDS } from "@/app/utils/config";

export default function About() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="h-[calc(100%-8rem)] flex flex-col justify-between mt-32">
          <div className="pb-10">
            <div className="about_stack">
              <TypingEffect words={WORDS} />
              <p className="static text-base font-bold md:absolute md:right-0 md:text-4xl">
                를 사용할 줄 아는 소다솜 입니다.
              </p>
            </div>
            <Site />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-[15rem]">
            {ABOUT_LIST.map((list) => (
              <AboutContent
                key={list.id}
                title={list.title}
                description={list.description}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
