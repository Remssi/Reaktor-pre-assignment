import React, { useState, useEffect } from "react";
import "./App.css";
import { getRules } from "./effects";
import { RuleContents } from "./consts/types";

function App() {
  const [tableOfContents, setTableOfContents] = useState<
    RuleContents["tableOfContents"]
  >();
  const [chaptersAndRules, setChaptersAndRules] = useState<
    RuleContents["chaptersAndRules"]
  >();

  // callback for rule fetch effect
  const onFetch = ({ tableOfContents, chaptersAndRules }: RuleContents) => {
    setTableOfContents(tableOfContents);
    setChaptersAndRules(chaptersAndRules);
  };

  useEffect(() => {
    getRules(onFetch);
  }, []);

  return <div></div>;
}

export default App;
