import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import UserList from "./userList/UserList";

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <UserList />
      </div>
    </>
  );
}

export default Dashboard;
