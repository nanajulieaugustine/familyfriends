"use client";
import { GoBell } from "react-icons/go";
import useStore from "@/app/store/store";
import NotifActive from "./NotifActive";

const NotificationIcon = () => {
  const { messages } = useStore();
  return <div>{messages > 0 ? <NotifActive /> : <GoBell size={20} />}</div>;
};

export default NotificationIcon;
