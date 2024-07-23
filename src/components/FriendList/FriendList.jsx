import React from "react";
import style from "../FriendList/FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map((friend) => {
        return (
          <li className={style.friendItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
