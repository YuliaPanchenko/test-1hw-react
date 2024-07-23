import style from "../FriendListItem/FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friendWrap}>
      <img className={style.friendPhoto} src={avatar} alt="Avatar" width={48} />
      <p className={style.friendName}>{name}</p>
      <p
        className={`${style.friendStatus} ${
          isOnline ? style.Online : style.Offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
