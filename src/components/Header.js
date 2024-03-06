import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "./AddPost";
import { useAccounts } from "./Context/AccountsContext";
import { useAuth } from "./Context/AuthContext";

function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();
  const { currAcc } = useAccounts();
  const { isAuthenticated, setAuthenticated } = useAuth();

  function handleClick() {
    navigate("/signup");
  }

  function handleAdmin() {
    navigate("/dashboard");
  }

  function handleSignOut() {
    setAuthenticated(false);
    navigate("/signin");
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {currAcc.role === "admin" && (
          <div style={{ marginRight: "30px" }}>
            <Button variant="contained" size="small" onClick={handleAdmin}>
              Admin Dashboard
            </Button>
          </div>
        )}
        <div style={{ marginRight: "30px" }}>
          <BasicModal />
        </div>
        <Button
          variant="outlined"
          size="small"
          onClick={isAuthenticated ? handleSignOut : handleClick}
        >
          {isAuthenticated ? "Sign out" : "Sign up"}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          flexWrap: "wrap", // Allow the toolbar to wrap on smaller screens
        }}
      >
        {sections.map((section, index) => (
          <Link
            to={`/category/${section.title}`}
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              p: 1,
              marginRight: "8px",
              marginBottom: "16px", // Increase the marginBottom value to increase the gap
              display: "inline-block", // Ensures each link is on a new line
            }}
          >
            <p
              style={{
                p: 1,
                marginRight: "60px",
                marginBottom: "2px", // Increase the marginBottom value to increase the gap
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              {section.title}
            </p>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
