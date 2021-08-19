import React from "react";

interface Props {
  rule: { text: string; additionalTexts: string[] };
}

const Rule: React.FC<Props> = ({ rule }) => {
  // splits the text from just the first empty space
  const [ruleNumber, ...rest] = rule.text.split(/ (.+)/);

  return (
    <div className="rule">
      <h2 className="ruleHeader">{ruleNumber}</h2>
      <p className="ruleText">{rest}</p>
      {rule.additionalTexts.map((additionalText, index) => (
        <p className="additionalText" key={index}>
          {additionalText}
        </p>
      ))}
    </div>
  );
};

export default Rule;
