import React, { useEffect, useRef } from "react";
import CustomJSONLesson from "./components/CustomJSONLesson";
import CustomLessonIntro from "./components/CustomLessonIntro";
import CustomShareLessons from "./components/CustomShareLessons";
import CustomWordListLesson from "./components/CustomWordListLesson";
import Subheader from "../../../components/Subheader";

import type { CustomLessonMaterialValidationState } from "./components/CustomLessonIntro";

type Props = {
  createCustomLesson: () => void;
  customLessonMaterial: any;
  customLessonMaterialValidationState: CustomLessonMaterialValidationState;
  customLessonMaterialValidationMessages: string[];
  fetchAndSetupGlobalDict: (
    withPlover: boolean,
    importedPersonalDictionaries?: any
  ) => Promise<any>;
  globalLookupDictionary: any;
  globalLookupDictionaryLoaded: boolean;
  personalDictionaries: any;
  setAnnouncementMessage: () => void;
};

const CustomLessonSetup = ({
  createCustomLesson,
  customLessonMaterial,
  customLessonMaterialValidationMessages,
  customLessonMaterialValidationState,
  fetchAndSetupGlobalDict,
  globalLookupDictionary,
  globalLookupDictionaryLoaded,
  personalDictionaries,
  setAnnouncementMessage,
}: Props) => {
  const mainHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    mainHeading.current?.focus();
  }, []);

  useEffect(() => {
    if (
      globalLookupDictionary &&
      globalLookupDictionary.size < 2 &&
      !globalLookupDictionaryLoaded
    ) {
      const shouldUsePersonalDictionaries =
        personalDictionaries &&
        Object.entries(personalDictionaries).length > 0 &&
        !!personalDictionaries.dictionariesNamesAndContents;

      fetchAndSetupGlobalDict(
        false,
        shouldUsePersonalDictionaries ? personalDictionaries : null
      ).catch((error) => {
        console.error(error);
        // this.showDictionaryErrorNotification();
      });
    }
  }, [
    fetchAndSetupGlobalDict,
    globalLookupDictionary,
    globalLookupDictionaryLoaded,
    personalDictionaries,
  ]);

  return (
    <main id="main">
      <Subheader>
        <div className="flex mr1 self-center">
          <header className="flex items-center min-h-40">
            <h2
              ref={mainHeading}
              tabIndex={-1}
              id="typey-type-for-stenographers-custom-lesson-setup"
            >
              Create a custom lesson
            </h2>
          </header>
        </div>
      </Subheader>

      <div className="bg-info dark:bg-coolgrey-1100 landing-page-section">
        <CustomLessonIntro
          createCustomLesson={createCustomLesson}
          customLessonMaterial={customLessonMaterial}
          customLessonMaterialValidationState={
            customLessonMaterialValidationState
          }
          customLessonMaterialValidationMessages={
            customLessonMaterialValidationMessages
          }
          setAnnouncementMessage={setAnnouncementMessage}
        />
      </div>

      <div className="bg-white dark:bg-coolgrey-1000 landing-page-section">
        <CustomWordListLesson globalLookupDictionary={globalLookupDictionary} />
      </div>

      <div className="bg-info dark:bg-coolgrey-1100 landing-page-section">
        <CustomJSONLesson />
      </div>

      <div className="bg-white dark:bg-coolgrey-1000 landing-page-section">
        <CustomShareLessons setAnnouncementMessage={setAnnouncementMessage} />
      </div>
    </main>
  );
};

export default CustomLessonSetup;
