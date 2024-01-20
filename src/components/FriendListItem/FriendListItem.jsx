import React from "react";
import style from "./FriendListItem.module.css";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={style.containerCart}>
      <img src={avatar} alt="" width={80} height={90} />
      <p>{name}</p>
      {isOnline ? (
        <p className={style.online}>Online</p>
      ) : (
        <p className={style.offline}>Offline</p>
      )}
    </div>
  );
};
