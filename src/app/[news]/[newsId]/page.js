import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  console.log(news);
  return (
    <Box className="my-5">
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Image
              src={news.thumbnail_url}
              alt="image"
              width={800}
              height={500}
            />
            <Grid
              className="my-3"
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  alt="image"
                  width={800}
                  height={500}
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  alt="image"
                  width={800}
                  height={500}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Avatar alt={news.author.name} src={news.author.img} />
              <Typography>{news.author.name}</Typography>
              <Typography>Publish -{news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                color: "gray",
                marginTop: "10px",
                whiteSpace: "pre-line",
              }}
            >
              {news.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetails;
