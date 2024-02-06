import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicNewsPage = async ({ searchParams }) => {
  const { data: categoryNews } = await getCategoryNews(searchParams.category);
  console.log(categoryNews);
  return (
    <div className="my-5">
      <h1>
        Total <strong>{searchParams.category}</strong> News:
        {categoryNews.length}
      </h1>
    </div>
  );
};

export default DynamicNewsPage;
