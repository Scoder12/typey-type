import React, { useEffect, useReducer, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { actions } from "../utilities/gameActions";
import { initConfig, gameReducer } from "./gameReducer";
import Completed from "../components/Completed";
import Intro from "../components/Intro";
import RoundProgress from "../components/RoundProgress";
import StenoLayoutDiagram from "../../../StenoLayout/AmericanStenoDiagram";
import Stroke from "../../../utils/stroke";
import { mapBriefToAmericanStenoKeys as mapBriefsFunction } from "../../../utils/typey-type";
import Puzzle from "./Puzzle";
import { ReactComponent as HoarderRobot } from "../../../images/HoarderRobot.svg";
import { choosePuzzleKey, prettyKey } from "./utilities";

const gameName = "KAOES";
const introText =
  "The mischievous steno robots have hidden all the steno keys. You need to find where they belong on the steno diagram.";
const rightColor = "#1F74D1";
const wrongColor = "#953159";
const neutralDarkColor = "#504C57";
const neutralLightColor = "#F2F1F4";
const diagramWidth = 568;

export default function Game() {
  const [puzzleText, setPuzzleText] = useState("");
  const [stenoStroke, setStenoStroke] = useState(new Stroke());
  const [previousStenoStroke, setPreviousStenoStroke] = useState(new Stroke());
  const [rightWrongColor, setRightWrongColor] = useState(neutralDarkColor);
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined, // init state
    initConfig
  );
  useEffect(() => {
    setPuzzleText(choosePuzzleKey(""));
  }, []);

  const onClickHandler = (key) => {
    if (!key) {
      return;
    }
    const tmpBoard = new Stroke();
    const clickedKey = tmpBoard.set(key).toString();
    if (puzzleText === clickedKey) {
      setPuzzleText(choosePuzzleKey(clickedKey));
      setStenoStroke(new Stroke());
      setRightWrongColor(rightColor);
      dispatch({ type: actions.moveToNextRound });
    } else {
      setStenoStroke(stenoStroke.set(key));
      setRightWrongColor(wrongColor);
    }
    setPreviousStenoStroke(tmpBoard.set(key));
    dispatch({ type: actions.makeGuess });
  };

  return (
    <div className="flex flex-wrap justify-between">
      <div className="mx-auto mw-1024 min-width-320 w-100">
        <h3 id="typey-type-SHUFL-game" className="text-center mb3">
          KAOES game
        </h3>
        {state.gameComplete ? (
          <Completed gameName={gameName} dispatch={dispatch} />
        ) : (
          <>
            <div className="flex flex-wrap pb1">
              <Intro
                introText={introText}
                robot={
                  <HoarderRobot
                    id="hoarder-robot-KAOES"
                    role="img"
                    aria-labelledby="hoarder-robot-title"
                  />
                }
              />
              <RoundProgress round={state.roundIndex + 1} />
            </div>
            <Puzzle puzzleText={prettyKey(puzzleText)} />
            <div className="flex flex-wrap flex-grow justify-center pt1 pb3">
              <div className="inline-flex relative mx-auto mw100">
                <TransitionGroup
                  className={"duplicate-steno-diagram absolute pointer-none"}
                  component={"div"}
                  key={previousStenoStroke.toString()}
                >
                  <CSSTransition
                    timeout={5000}
                    classNames="key-dissolve"
                    appear={true}
                  >
                    <StenoLayoutDiagram
                      id="duplicateStenoDiagram"
                      {...mapBriefsFunction(
                        state.firstGuess ? "" : previousStenoStroke.toString()
                      )}
                      handleOnClick={undefined}
                      brief={`duplicate-${puzzleText}`}
                      diagramWidth={diagramWidth}
                      onStrokeColor={rightWrongColor}
                      offStrokeColor="transparent"
                      onTextColor="#fff"
                      offTextColor="transparent"
                      onKeyColor={rightWrongColor}
                      offKeyColor="transparent"
                    />
                  </CSSTransition>
                </TransitionGroup>
                <StenoLayoutDiagram
                  id="stenoDiagram"
                  {...mapBriefsFunction(stenoStroke.toString())}
                  handleOnClick={onClickHandler}
                  brief={puzzleText}
                  diagramWidth={diagramWidth}
                  hideLetters={true}
                  onStrokeColor={neutralDarkColor}
                  offStrokeColor={neutralDarkColor}
                  onTextColor="#fff"
                  offTextColor="#fff"
                  onKeyColor={neutralDarkColor}
                  offKeyColor={neutralLightColor}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
