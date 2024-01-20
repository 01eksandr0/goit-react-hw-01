import React from "react";
import style from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.nameContainer}>
        <div className={style.imgContainer}>
          <img src={image} alt="" width={50} height={50} />
        </div>
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={style.list}>
        <li>
          <p>followers</p>
          <p>{stats.followers}</p>
        </li>
        <li>
          <p>views</p>
          <p>{stats.views}</p>
        </li>
        <li>
          <p>likes</p>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
