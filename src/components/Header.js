import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "./AddPost";

function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
  }
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          // align="center"

          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>{/* <SearchIcon /> */}</IconButton>
        <div style={{ marginRight: "30px" }}>
          <BasicModal />
        </div>
        <Button variant="outlined" size="small" onClick={handleClick}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            to={`/category/${section.title}`}
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
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
