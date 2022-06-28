import styles from "../mainButton.module.css";
//import Link from "next/link";
/*
import {
  createMeetingAndRedirect,
  updateMeetingAndRedirect,
  deleteMeetingAndRedirectToMainPage,
  test,
  interested,
  copyUrl,
} from "../actions";
*/

import {
  test1,
  test2
} from "../actions";

let elements = {};


elements.test1 = {
  name: "test1",
  element: (
    <button
      key="deleteMeeting"
      type="submit"
      className={`${styles.defaultButtons}`}
      onClick={test1}
    >
      TEST 1
    </button>
  ),
};

elements.test2 = {
  name: "test1",
  element: (
    <button
      key="deleteMeeting"
      type="submit"
      className={`${styles.defaultButtons}`}
      onClick={test2}
    >
      TEST 2
    </button>
  ),
};

export default elements;

// BELLOW NOT USED BUT CAN STAY AS EXANPLE
/*
elements.linkToCreateMeetingPage = {
  name: "linkToCreateMeetingPage",
  group: "MAIN_PAGE",
  element: (
    <button key="newMeeting" className={styles.defaultButtons}>
      <Link href="/create">CREATE EVENT</Link>
    </button>
  ),
};

elements.linkToJoinMeetingPage = {
  name: "linkToJoinMeetingPage",
  group: "MAIN_PAGE",
  element: (
    <button key="joinMeeting" className={styles.defaultButtons}>
      <Link href="/meetings">JOIN EVENT</Link>
    </button>
  ),
};

elements.createButton = {
  name: "createButton",
  group: "CREATE_MEETING",
  element: (
    <button
      key="createMeeting"
      type="submit"
      className={`${styles.defaultButtons} ${styles.accept}`}
      onClick={test}
    >
      CREATE
    </button>
  ),
};

elements.linkBackToMainPage = {
  name: "linkBackToMainPage",
  group: "CREATE_MEETING",
  element: (
    <button key="backToMainPage" className={styles.defaultButtons}>
      <Link href="/">BACK</Link>
    </button>
  ),
};

elements.linkBackToMeetings = {
  name: "linkBackToMeetings",
  group: "MEETING",
  element: (
    <button key="linkBackToMeetings" className={styles.defaultButtons}>
      <Link href="/meetings">BACK</Link>
    </button>
  ),
};

elements.updateMeetingButton = {
  name: "updateMeetingButton",
  element: (
    <button
      key="updateMeeting"
      type="submit"
      className={`${styles.defaultButtons} ${styles.accept}`}
      onClick={test}
    >
      UPDATE
    </button>
  ),
};

elements.deleteMeetingButton = {
  name: "deleteMeetingButton",
  element: (
    <button
      key="deleteMeeting"
      type="submit"
      className={`${styles.defaultButtons} ${styles.delete}`}
      onClick={test}
    >
      DELETE
    </button>
  ),
};

elements.interestedButton = {
  name: "interestedButton",
  element: (
    <button
      key="interested"
      type="submit"
      className={`${styles.defaultButtons} ${styles.interested}`}
      onClick={test}
    >
      {"LIKE"}
    </button>
  ),
};

elements.copyUrlButton = {
  name: "copyButton",
  element: (
    <button
      key="copy"
      type="submit"
      className={`${styles.defaultButtons}`}
      onClick={test}
    >
      SHARE
    </button>
  ),
};
*/


