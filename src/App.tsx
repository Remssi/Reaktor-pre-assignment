import React, { useState, useEffect } from "react";
import "./App.css";
import { getRules } from "./effects";
import { RuleContents } from "./consts/types";
import { ChapterContent, TableOfContents } from "./components";

function App() {
  const [tableOfContents, setTableOfContents] = useState<
    RuleContents["tableOfContents"]
  >({});
  const [chaptersAndRules, setChaptersAndRules] = useState<
    RuleContents["chaptersAndRules"]
  >({});

  const [currentChapter, setCurrentChapter] = useState("100");

  // callback for rule fetch effect
  const onFetch = ({ tableOfContents, chaptersAndRules }: RuleContents) => {
    setTableOfContents(tableOfContents);
    setChaptersAndRules(chaptersAndRules);
  };

  useEffect(() => {
    getRules(onFetch);
  }, []);

  const handleChapterChange = (selectedChapter: string) => {
    setCurrentChapter(selectedChapter);
  };

  if (!tableOfContents[currentChapter] && !chaptersAndRules[currentChapter])
    return <div>Loading...</div>;

  return (
    <div className="container">
      <TableOfContents
        currentChapter={currentChapter}
        chapterCollections={tableOfContents}
        handleChapterChange={handleChapterChange}
      />
      <ChapterContent currentChapterRules={chaptersAndRules[currentChapter]} />
    </div>
  );
}

export default App;
