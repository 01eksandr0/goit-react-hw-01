import "./App.css";
import userData from "../../src/userData.json";
import friends from "../../src/friends.json";
import transaction from "../transactions.json";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </div>
  );
}

export default App;
