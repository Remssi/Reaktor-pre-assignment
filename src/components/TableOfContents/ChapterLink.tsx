import React from "react";

interface Props {
  text: string;
  active: boolean;
  chapterNumber: string;
  handleChapterChange: (selectedChapter: string) => void;
}

const ChapterLink: React.FC<Props> = ({
  text,
  active,
  chapterNumber,
  handleChapterChange,
}) => {
  return (
    <a
      href="/"
      className={active ? "chapterLink chapterLink-active" : "chapterLink"}
      onClick={e => {
        e.preventDefault();
        handleChapterChange(chapterNumber);
      }}
    >
      {text}
    </a>
  );
};

export default ChapterLink;
