import style from "../Profile/Profile.module.css";
import React from "react";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.cardWrap}>
      <div className={style.cardElement}>
        <img className={style.cardPhoto} src={image} alt="User avatar" />
        <p className={style.cardName}>{name}</p>
        <p className={style.cardTag}>@{tag}</p>
        <p className={style.cardLocation}>{location}</p>
      </div>

      <ul className={style.cardList}>
        <li className={style.cardItem}>
          <span className={style.itemName}>{"Followers"}</span>
          <span className={style.itemSum}>{stats.followers}</span>
        </li>
        <li className={style.cardItem}>
          <span className={style.itemName}>{"Views"}</span>
          <span className={style.itemSum}>{stats.views}</span>
        </li>
        <li className={style.cardItem}>
          <span className={style.itemName}>{"Likes"}</span>
          <span className={style.itemSum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
