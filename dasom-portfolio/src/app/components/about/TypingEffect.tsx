"use client";

import { useEffect, useState } from "react";

import { ITypingEffectProps } from "@/app/interface/About.interface";

export default function TypingEffect({ words }: ITypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [deletingSpeed, setDeletingSpeed] = useState(50);

  useEffect(() => {
    const wordArray = words[index % words.length];
    const targetWord = isDeleting ? "" : wordArray;

    let interval: NodeJS.Timeout;

    if (!isDeleting && displayText === targetWord) {
      // 단어가 완전히 입력되면 1초 대기 후 삭제
      interval = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayText === "") {
      // 단어가 완전히 삭제되면 다음 단어로 이동
      setIndex((prevIndex) => prevIndex + 1);
      setIsDeleting(false);
    } else {
      // 타이핑 또는 삭제 효과
      interval = setInterval(
        () => {
          if (isDeleting) {
            setDisplayText((prevText) => prevText.slice(0, -1));
          } else {
            setDisplayText((prevText) =>
              wordArray.slice(0, prevText.length + 1)
            );
          }
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    // 언마운트 시 간격 클리어
    return () => clearInterval(interval as any);
  }, [displayText, index, isDeleting, words]);

  return (
    <div className="text-[2.5rem] font-extrabold text-base-black md:text-[4rem]">
      {displayText}
      <span className="animate-ping">&#124;</span>
    </div>
  );
}
