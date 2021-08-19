import React from "react";
import { RuleContents } from "../../consts/types";
import ChapterLink from "./ChapterLink";

interface Props {
  currentChapter: string;
  chapterCollections: RuleContents["tableOfContents"];
  handleChapterChange: (selectedChapter: string) => void;
}

const TableOfContents: React.FC<Props> = ({
  currentChapter,
  chapterCollections,
  handleChapterChange,
}) => {
  return (
    <div className="tableOfContents">
      {Object.values(chapterCollections).map((chapterCollection, index) => {
        return (
          <div key={index}>
            {chapterCollection.map((chapter, index) => {
              // first element is the chapter collection name (e.g. 1. Game Concepts)
              if (index === 0)
                return (
                  <h2 className="collectionName" key={index}>
                    {chapter}
                  </h2>
                );

              const chapterNumber = Number(chapter.substring(0, 3)).toString();
              return (
                <ChapterLink
                  key={index}
                  text={chapter}
                  active={currentChapter === chapterNumber}
                  chapterNumber={chapterNumber}
                  handleChapterChange={handleChapterChange}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableOfContents;
