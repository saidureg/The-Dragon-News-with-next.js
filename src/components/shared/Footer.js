import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// icon
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Pages",
      pathName: "/pages",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];
  return (
    <Box className="bg-black py-10 px-2">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              fontSize: "2rem",
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <XIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" textAlign={"center"} color={"gray"}>
          &copy; {new Date().getFullYear()} All rights reserved. Designed by
          Saidur Rahaman.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
