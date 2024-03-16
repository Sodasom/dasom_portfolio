import GithubIcon from "../assets/icons/GithubIcon";
import LinkIcon from "../assets/icons/LinkIcon";

const NAV_MENU_LIST = [
  {
    id: 0,
    title: "ABOUT",
    path: "/about",
  },
  {
    id: 1,
    title: "PROJECT",
    path: "/project",
  },
  {
    id: 2,
    title: "CONTACT",
    path: "/contact",
  },
];

const WORDS = ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js"];

const ABOUT_LIST = [
  {
    id: 0,
    title: "Education",
    description: [
      {
        id: 0,
        date: "2022.08 - 2023.02",
        name: "코드스테이츠",
        part: "프론트엔드 엔지니어링 41기",
      },
    ],
  },
  {
    id: 1,
    title: "Career",
    description: [
      {
        id: 0,
        date: "2023.12 -",
        name: "(주) 칸컴스",
        part: "프론트엔드 개발 사원",
      },
      {
        id: 1,
        date: "2023.07 - 2023.09",
        name: "(주) 체인위드",
        part: "프론트엔드 개발 파트타임 사원",
      },
    ],
  },
];

const PROJECT_LIST = [
  {
    id: 0,
    image: "/images/project_quiz.png",
    title: "Quiz Web / App",
    date: "2023.06 - 2023.06",
    description: "영어로 즐기는 간단한 Quiz Web / App 사이트",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Recoil",
      "Axios",
      "Tailwind CSS",
      "Vercel",
    ],
    link: [
      {
        icon: <GithubIcon width="24" height="24" />,
        title: "Github",
        url: "https://github.com/Sodasom/Quiz",
      },
      {
        icon: <LinkIcon width="24" height="24" />,
        title: "Link",
        url: "https://quiz-azure-six.vercel.app/",
      },
    ],
  },
  {
    id: 1,
    image: "/images/project_whyStay.jpg",
    title: "Why Stay?",
    date: "2023.01 - 2023.02",
    description: "숙박 목적에 따른 분류로 안성맞춤 숙박 업체 예약 웹 서비스",
    stack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux Toolkit",
      "Axios",
      "React Query",
      "Styled Components",
      "Amazon S3",
    ],
    link: [
      {
        icon: <GithubIcon width="24" height="24" />,
        title: "Github",
        url: "https://github.com/codestates-seb/seb41_main_016",
      },
      {
        icon: <LinkIcon width="24" height="24" />,
        title: "Link",
        url: "http://whystay.p-e.kr/",
      },
    ],
  },
  {
    id: 2,
    image: "/images/project_stackOverFlow_clone.png",
    title: "Stack Overflow Clone",
    date: "2022.12 - 2022.12",
    description: "Stack Overflow Clone 프로젝트",
    stack: ["React", "JavaScript", "HTML", "CSS", "Axios", "Styled Components"],
    link: [
      {
        icon: <GithubIcon width="24" height="24" />,
        title: "Github",
        url: "https://github.com/codestates-seb/seb41_pre_008",
      },
      {
        icon: <LinkIcon width="24" height="24" />,
        title: "Link",
        url: "http://sebpre008.s3-website.ap-northeast-2.amazonaws.com/",
      },
    ],
  },
];

export { NAV_MENU_LIST, WORDS, ABOUT_LIST, PROJECT_LIST };
