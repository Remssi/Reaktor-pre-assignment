import React, { useState, useEffect } from "react";
import "./App.css";
import { getRules } from "./effects";
import { RuleContents } from "./consts/types";
import { ChapterContent, Footer, Header, TableOfContents } from "./components";

// ! to bypass cors restriction in development, add: "proxy": "https://media.wizards.com", to package.json file
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

  // always scroll to top after render
  window.scrollTo(0, 0);

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
