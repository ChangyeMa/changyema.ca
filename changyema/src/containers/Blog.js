import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function Blog() {
  return (
    <div>
      <Typography variant="h4" color="error">
        BLOG set
      </Typography>
      <Button variant="contained" size="large" component={Link} to="/">
        Home
      </Button>
    </div>
  );
}
