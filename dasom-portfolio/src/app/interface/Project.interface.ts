// ProjectCard
interface ILink {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export interface IProjectCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
  link: ILink[];
}
