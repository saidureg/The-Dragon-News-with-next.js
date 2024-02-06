import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingLogo from "@/assets/logo2.png";
import { showCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          src={headingLogo}
          width={400}
          height={400}
          alt="Heading Logo"
          className="mx-auto"
        />
        <Typography
          className="my-2"
          variant="body2"
          textAlign="center"
          color="gray"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
