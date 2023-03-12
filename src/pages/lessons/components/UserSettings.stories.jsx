import React from "react";
import UserSettings from "./UserSettings";
import userSettingsFixture from "../../../stories/fixtures/userSettings";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/UserSettings",
  component: UserSettings,
};

const defaultArgs = {
  changeSortOrderUserSetting: () => undefined,
  changeSpacePlacementUserSetting: () => undefined,
  changeStenoLayout: () => undefined,
  changeShowStrokesAs: () => undefined,
  changeShowStrokesAsList: () => undefined,
  changeShowStrokesOnMisstroke: () => undefined,
  changeUserSetting: () => undefined,
  chooseStudy: () => undefined,
  disableUserSettings: false,
  handleDiagramSize: () => undefined,
  handleBeatsPerMinute: () => undefined,
  handleLimitWordsChange: () => undefined,
  handleStartFromWordChange: () => undefined,
  handleRepetitionsChange: () => undefined,
  handleUpcomingWordsLayout: () => undefined,
  hideOtherSettings: false,
  maxStartFromWord: 100,
  revisionMode: false,
  setAnnouncementMessage: () => undefined,
  totalWordCount: 50,
  userSettings: userSettingsFixture,
};

const Template = (args) => {
  return (
    <div
      id="lesson-page"
      className="flex-wrap-md flex mx-auto mw-1920"
      style={{ justifyContent: "flex-end" }}
    >
      <UserSettings {...args} />
    </div>
  );
};

export const UserSettingsStory = Template.bind({});
UserSettingsStory.args = { ...defaultArgs };

export const UserSettingsDisabled = Template.bind({});
UserSettingsDisabled.args = {
  ...defaultArgs,
  disableUserSettings: true,
};