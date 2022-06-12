import styles from "../mainButton.module.css";
import Link from "next/link";
import {
  createMeetingAndRedirect,
  updateMeetingAndRedirect,
  deleteMeetingAndRedirectToMainPage,
  test,
  interested,
  copyUrl,
} from "../actions";

let elements = {};

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
      onClick={createMeetingAndRedirect}
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
      onClick={updateMeetingAndRedirect}
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
      onClick={deleteMeetingAndRedirectToMainPage}
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
      onClick={interested}
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
      onClick={copyUrl}
    >
      SHARE
    </button>
  ),
};

module.exports = elements;
