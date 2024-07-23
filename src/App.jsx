import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "../src/data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "../src/data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "../src/data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
