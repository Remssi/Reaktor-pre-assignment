import React from "react";
import Rule from "./Rule";
import "./chapterContent.css";

interface Props {
  currentChapterRules: { text: string; additionalTexts: string[] }[];
}

const ChapterContent: React.FC<Props> = ({ currentChapterRules }) => {
  return (
    <div className="chapterContent">
      {Object.values(currentChapterRules).map((rule, index) => {
        // first element is the chapter title (e.g. 100. General)
        if (index === 0)
          return (
            <h1 className="chapterTitle" key={index}>
              {rule.text}
            </h1>
          );

        return <Rule key={index} rule={rule} />;
      })}
    </div>
  );
};

export default ChapterContent;
