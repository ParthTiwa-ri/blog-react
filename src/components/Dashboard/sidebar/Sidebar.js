import "./sidebar.css";
import { PermIdentity } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu"></div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
