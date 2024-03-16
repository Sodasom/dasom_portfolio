// TypingEffect
export interface ITypingEffectProps {
  words: string[];
}

// AboutContent
interface IDescription {
  id: number;
  date: string;
  name: string;
  part: string;
}

export interface IAboutContentProps {
  title: string;
  description: IDescription[];
}
