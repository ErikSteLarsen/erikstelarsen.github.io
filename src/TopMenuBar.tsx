// src/components/TopMenuBar.tsx
import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const TopMenuBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ height: 40 }}>
      <Toolbar
        variant="dense"
        sx={{ minHeight: 40, backgroundColor: "lightgrey", color: "white" }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "white",
            textDecoration: "none",
            marginLeft: 1,
          }}
        >
          Word games
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <Typography
            variant="body1"
            component={Link}
            to="/info"
            sx={{
              color: "white",
              textDecoration: "none",
              mx: 1,
            }}
          >
            Info
          </Typography>
          <Typography
            variant="body1"
            component={Link}
            to="/about"
            sx={{
              color: "white",
              textDecoration: "none",
              mx: 1,
            }}
          >
            About
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenuBar;
