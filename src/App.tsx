import React, { useState, useEffect } from "react";
import "./App.css";
import { getRules } from "./effects";
import { RuleContents } from "./consts/types";
import { ChapterContent, Footer, Header, TableOfContents } from "./components";

function App() {
  const [tableOfContents, setTableOfContents] = useState<
    RuleContents["tableOfContents"]
  >({});
  const [chaptersAndRules, setChaptersAndRules] = useState<
    RuleContents["chaptersAndRules"]
  >({});

  const [currentChapter, setCurrentChapter] = useState("100");

  const [searchText, setSearchText] = useState("");

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
    <div>
      <Header setSearchText={setSearchText} />
      <div className="container">
        <TableOfContents
          currentChapter={currentChapter}
          chapterCollections={tableOfContents}
          handleChapterChange={handleChapterChange}
        />
        <ChapterContent
          currentChapterRules={chaptersAndRules[currentChapter]}
          searchText={searchText}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
