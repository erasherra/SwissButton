import elements from "./elements";

const switcher = (state) => {
  let elementView = {
    elements: [],
    previousView: null,
  };

  switch (state) {

    case "MAIN_PAGE":
      // code block
      elementView.name = "main_page";
      elementView.previousView = "MAIN_PAGE";
      elementView.elements = [
        elements.test1,
        elements.test2,
        elements.page1,
        elements.home
      ];
      break;

    default:
      return switcher("MAIN_PAGE");

    /// BELLOW IS NOT USED BUT WORKS AS EXAMPLE

    /*
    case "MAIN_PAGE":
      // code block
      elementView.name = "main_page";
      elementView.previousView = "MAIN_PAGE";
      elementView.elements = [
        elements.linkToCreateMeetingPage,
        elements.linkToJoinMeetingPage,
      ];
      break;
    case "CREATE_MEETING":
      elementView.name = "create_meeting_page";
      elementView.previousView = "MAIN_PAGE";
      elementView.elements = [
        elements.createButton,
        elements.linkBackToMainPage,
      ];
      // code block

      break;
    case "PRIVATE_MEETING":
      elementView.name = "private_meeting_page";
      elementView.previousView = "MAIN_PAGE";
      elementView.elements = [
        elements.linkBackToMeetings,
        elements.copyUrlButton,
        elements.interestedButton,
      ];
      // code block

      break;

    case "MEETINGS":
      elementView.name = "meetings_page";
      elementView.elements = [elements.linkBackToMainPage];
      // code block

      break;

    case "ADMIN_MEETING":
      elementView.name = "admin_meeting_page";
      elementView.previousView = "MAIN_PAGE";
      elementView.elements = [
        elements.linkBackToMeetings,
        elements.copyUrlButton,
        elements.updateMeetingButton,
        elements.deleteMeetingButton,
      ];
      break;

    default:
      return switcher("MAIN_PAGE");
    // code block

    */
  }

  return elementView;
};

export default switcher;
