import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState("en");
    const [languages, setLanguages] = useState([
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ar', name: 'Arabic' },
    ]);


  return (
    <div style={style.wrapper}>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        style={style.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name.toLocaleUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

const style = {
  wrapper: {
    display: "inline-block",
    position: "relative",
  },
  select: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #d4af37", // gold-ish border
    borderRadius: "6px",
    padding: "6px 28px 6px 10px", // right padding for arrow space
    fontSize: "14px",
    appearance: "none", // removes default browser styling
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\'><path fill=\'%23d4af37\' d=\'M0 0l5 6 5-6z\'/></svg>")', // custom gold arrow
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
    backgroundSize: "10px 6px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
};

export default LanguageSwitcher;
