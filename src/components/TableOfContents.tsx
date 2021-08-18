import React from "react";
import { RuleContents } from "../consts/types";

interface Props {
  chapters: RuleContents["tableOfContents"];
  handleChapterChange: (selectedChapter: string) => void;
}

const TableOfContents: React.FC<Props> = ({
  chapters,
  handleChapterChange,
}) => {
  console.log(chapters);
  return (
    <div className="tableOfContents">
      {Object.values(chapters).map(e => {
        return (
          <div>
            {e.map((c, index) => {
              const chapterNumber = Number(c.substring(0, 3));
              if (chapterNumber < 100) return <p key={index}>{c}</p>;

              return (
                <>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      handleChapterChange(chapterNumber.toString());
                    }}
                  >
                    {c}
                  </a>
                  <br />
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableOfContents;
