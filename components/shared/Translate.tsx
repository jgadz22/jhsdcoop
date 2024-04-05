"use client";

import React, { useEffect, useState } from "react";

const Translate: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ja");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "ja", // Change to Japanese language
          includedLanguages: "en,ja",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .VERTICAL,
        },
        "google_translate_element"
      );

      // Add event listener for language change
      (window as any).google.translate.TranslateElement.prototype.onChange =
        function (e: { target: { value: string } }) {
          setSelectedLanguage(e.target.value.toString);
        };

      setIsLoading(false); // Set loading state to false after initialization
    };

    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(addScript);
    };
  }, [selectedLanguage]);

  if (isLoading) {
    return <p>Loading translation...</p>;
  }
  return (
    <div>
      <div id="google_translate_element"></div>
      <p className="text-gray-500">Selected Language: {selectedLanguage}</p>
    </div>
  );
};

export default Translate;
