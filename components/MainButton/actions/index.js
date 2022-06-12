//HERE YOU CAN CREATE WHAT EVER ACTION IS NEEDED
import axios from "axios";
//import { Redirect } from "react-router-dom";
import Router from "next/router";

import store from "../../../redux/meetingDataStore";
import updateStore from "../../../redux/updateMeetingDataStore";
import mainStore from "../../../redux/mainDataHolder";
import { showMesage, showTimedMessage } from "./chat";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:7777/api/"
      : "/api/",
  timeout: 10000,
});

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "localhost:3000",
};

const createMeeting = async (meetingData) => {
  console.log("Posting following data to /create path:");
  console.log(meetingData);
  try {
    const response = await api.post("/create", meetingData, headers);
    console.log("RESPONSE:");
    console.log(response);
    return response;
  } catch (error) {
    console.warn("Error on createMeeting", error);
    return error;
  }
};

const createMeetingAndRedirect = async () => {
  try {
    let data = store.getState();

    const response = await createMeeting(data);

    const redirectTo =
      "/meeting?mid=" + response.data.mid + "&key=" + response.data.admin_key;

    console.log(redirectTo);
    Router.push(redirectTo);
  } catch (error) {
    console.warn("Error on createMeetingAndRedirect", error);
  }
};

const updateMeetingAndRedirect = async () => {
  try {
    const data = updateStore.getState();
    const mid = data && data.meeting_id ? data.meeting_id : "empty";
    const key = data && data.admin_key ? data.admin_key : "empty";
    const path = "update/meeting/" + mid + "?key=" + key;
    const response = await api.put(path, data, headers);

    console.log("RESPONSE:");
    console.log(response);

    const redirectTo = "/meeting?mid=" + mid + "&key=" + key;
    Router.push(redirectTo);

    return response;
  } catch (error) {
    console.warn("Error on updateMeetingAndRedirect", error);
    return error;
  }
};

const deleteMeetingAndRedirectToMainPage = async () => {
  try {
    const data = updateStore.getState();
    const mid = data && data.meeting_id ? data.meeting_id : "empty";
    const key = data && data.admin_key ? data.admin_key : "empty";
    const path = "delete/meeting/" + mid + "?key=" + key;
    const response = await api.delete(path, data, headers);

    const redirectTo = "/meetings";
    Router.push(redirectTo);

    return response;
  } catch (error) {
    console.warn("Error on deleteMeetingAndRedirectToMainPage", error);
    return error;
  }
};

const interested = async () => {
  try {
    const data = mainStore.getState();
    const mid = data && data.meeting_id ? data.meeting_id : "empty";
    const path = "post/meeting/interested/" + mid;
    const response = await api.get(path, data, headers);

    //const redirectTo = "/meeting/"+mid;
    //Router.push(redirectTo);

    showTimedMessage("❤️❤️❤️!", 2000);
    return response;
  } catch (error) {
    console.warn("Error on deleteMeetingAndRedirectToMainPage", error);
    return error;
  }
};

const copyUrl = async () => {
  console.log(window.window.location.pathname);
  console.log(window.window.location.href);
  const el = document.createElement("input");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  showTimedMessage("Copied!", 2000);
};

const test = (event) => {
  event.preventDefault();
  console.log("rrrer");
  console.log(store.getState());
  //store.subscribe(() => console.log(store.getState()));
};

export {
  createMeetingAndRedirect,
  updateMeetingAndRedirect,
  deleteMeetingAndRedirectToMainPage,
  test,
  interested,
  copyUrl,
};
