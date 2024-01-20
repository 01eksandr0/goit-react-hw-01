import React from "react";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map((item) => {
        return (
          <li className={style.cart} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
