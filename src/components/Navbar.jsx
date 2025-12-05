// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ColorModeContext } from "../ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ onNav, activeSection }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { key: "hero", label: "Home" },
    { key: "services", label: "Services" },
    { key: "portfolio", label: "Portfolio" },
    { key: "videos", label: "Videos" }, // Added Video section
    { key: "contact", label: "Contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton onClick={() => onNav(item.key)}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === item.key ? 700 : 500,
                  color: activeSection === item.key ? "primary.main" : "text.primary",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={trigger ? 3 : 0}
      sx={{
        transition: "all 0.3s ease",
        // bgcolor: trigger ? theme.palette.background.default : "transparent",
        // backdropFilter: trigger ? "blur(8px)" : "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: trigger ? 1 : 2,
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ fontSize: trigger ? "1rem" : "1.25rem", transition: "all 0.3s ease" }}
        >
          Abdur Rehman
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.key}
              onClick={() => onNav(item.key)}
              color={activeSection === item.key ? "primary" : "inherit"}
              sx={{
                fontWeight: activeSection === item.key ? 700 : 500,
                borderBottom: activeSection === item.key ? "2px solid" : "none",
                borderColor: activeSection === item.key ? "primary.main" : "transparent",
                borderRadius: 0,
                fontSize: trigger ? "0.9rem" : "1rem",
                transition: "all 0.3s ease",
              }}
            >
              {item.label}
            </Button>
          ))}

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Mobile Nav */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
