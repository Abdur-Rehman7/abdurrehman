// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const Contact = React.forwardRef((props, ref) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hma0nsi",   // Service ID
        "template_4kryyba",  // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "RfLNf-IcS14EW-GNg"   // Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((err) =>
        alert("Error sending message: " + err.text || err)
      );
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mb={4}
          >
            Interested in working together? Let’s talk!
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Name"
                  name="name"
                  fullWidth
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  fullWidth
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 25px rgba(0,0,0,0.3)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
});

export default Contact;
