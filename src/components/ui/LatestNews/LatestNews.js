import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/Top_News.jpg";
import topNews2 from "@/assets/Top_News2.avif";

const LatestNews = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="Top News" width={800} height={500} />
          </CardMedia>
          <CardContent>
            <p className="bg-red-500 px-2 text-white w-[100px] rounded my-3">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              New Breakthrough in Quantum Computing
            </Typography>
            <Typography className="my-3" gutterBottom>
              By John Smith - 2023-08-21
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        className="my-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News" width={800} height={500} />
              </CardMedia>
              <CardContent>
                <p className="bg-red-500 px-2 text-white w-[100px] rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  New Breakthrough in Quantum Computing
                </Typography>
                <Typography className="my-3" gutterBottom>
                  By John Smith - 2023-08-21
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News" width={800} height={500} />
              </CardMedia>
              <CardContent>
                <p className="bg-red-500 px-2 text-white w-[100px] rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  New Breakthrough in Quantum Computing
                </Typography>
                <Typography className="my-3" gutterBottom>
                  By John Smith - 2023-08-21
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News" width={800} height={500} />
              </CardMedia>
              <CardContent>
                <p className="bg-red-500 px-2 text-white w-[100px] rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  New Breakthrough in Quantum Computing
                </Typography>
                <Typography className="my-3" gutterBottom>
                  By John Smith - 2023-08-21
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News" width={800} height={500} />
              </CardMedia>
              <CardContent>
                <p className="bg-red-500 px-2 text-white w-[100px] rounded my-3">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  New Breakthrough in Quantum Computing
                </Typography>
                <Typography className="my-3" gutterBottom>
                  By John Smith - 2023-08-21
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
