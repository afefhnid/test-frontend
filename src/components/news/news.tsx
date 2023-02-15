import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Data from "../../news.json";
import { NewsType } from "../../typings/index";
import { AddNews } from "../form/form";
export const News: React.FC = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [categorys, setcategorys] = useState<string[]>([]);

  useEffect(() => {
    setNews(Data.news);
  }, []);

  useEffect(() => {
    let options: string[] = [];
    Data.news.map((element) => {
      options.push(element.category);
    });
    let categorysOptions = options.filter((element, index) => {
      return options.indexOf(element) === index;
    });
    setcategorys(categorysOptions);
  }, []);

  const handelChange = (category: string) => {
    const filterData = Data.news.filter(
      (element) => element.category === category
    );
    setNews(filterData);
  };
  return (
    <Box sx={{ textAlign: "end", padding: "20px" }}>
      <AddNews />
      <>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Catégory</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Catégory"
            onChange={(e) => handelChange(e?.target.value as string)}
          >
            {categorys.map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </>
      <Box sx={{ display: "flex", padding: "20px" }}>
        {news.map((element) => {
          return (
            <Box sx={{ display: "flex" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`../images/${element.text}`}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {element.category}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {element.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.date}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
