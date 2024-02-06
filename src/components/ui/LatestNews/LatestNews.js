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
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
  const { data } = await getAllNews();

  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              alt="Top News"
              width={800}
              height={500}
            />
          </CardMedia>
          <CardContent>
            <span className="bg-red-500 p-1 text-white rounded my-3">
              {data[0].category}
            </span>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography className="my-3" gutterBottom>
              By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
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
        {data.slice(1, 5).map((news) => (
          <Grid key={news._id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    alt="Top News"
                    width={800}
                    height={100}
                  />
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 p-1 text-white rounded my-3">
                    {news.category}
                  </span>
                  <Typography gutterBottom>
                    {news.title.length > 30
                      ? news.title.slice(0, 30) + "..."
                      : news.title}
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length > 120
                      ? news.details.slice(0, 120) + "..."
                      : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
