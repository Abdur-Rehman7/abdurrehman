import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const CTA = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{ bgcolor: "primary.main", color: "white", py: 10 }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Ready to get started?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Start building with a lightweight template and MUI components.
        </Typography>

        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Sign Up Free
        </Button>
      </Container>
    </Box>
  );
});

export default CTA;
