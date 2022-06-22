import React, { useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Input({
  onChangeInput,
  previousCompletedPhraseAsTyped,
  round,
  typedText,
  gameName,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  const onChangeTypedText = (event) => {
    const inputText = event?.target?.value || "";
    onChangeInput(inputText);
  };

  return (
    <>
      <label
        htmlFor={`${gameName}-input`}
        className="inline-block mb05 visually-hidden"
      >
        Enter the correct word:
      </label>
      <div className="relative">
        <samp className="pointer-none absolute absolute--fill w-100">
          <TransitionGroup
            className={"dib flex justify-center"}
            component={"span"}
            key={round}
          >
            <CSSTransition timeout={50000} classNames="dissolve" appear={true}>
              <kbd
                className={
                  "color-success successfully-typed-text typed-text-input-positioning pre relative text-center"
                }
                aria-hidden="true"
              >
                {round > 1 ? previousCompletedPhraseAsTyped : ""}
              </kbd>
            </CSSTransition>
          </TransitionGroup>
        </samp>
        <textarea
          ref={inputRef}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className={
            "input-textarea typed-text-input-positioning typed-text-input-textarea text-center"
          }
          id={`${gameName}-input`}
          onChange={onChangeTypedText}
          rows="1"
          spellCheck="false"
          value={typedText}
          wrap="off"
        ></textarea>
      </div>
    </>
  );
}