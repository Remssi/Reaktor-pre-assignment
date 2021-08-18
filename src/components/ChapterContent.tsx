import React from "react";

interface Props {
  currentChapterRules: { text: string; additionalTexts: string[] }[];
}

const ChapterContent: React.FC<Props> = ({ currentChapterRules }) => {
  return (
    <div>
      {Object.keys(currentChapterRules).map((e, index) => (
        <div key={e}>
          <p>{currentChapterRules[index].text}</p>
          {currentChapterRules[index].additionalTexts.map((a, index) => (
            <span key={index}>
              {a}
              <br />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChapterContent;
