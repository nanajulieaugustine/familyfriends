import NotificationIcon from "./NotificationIcon";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <h1>FamilyFriends</h1>
      <NotificationIcon></NotificationIcon>
    </div>
  );
};

export default Header;
