import { FcExpand } from "react-icons/fc";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Selector() {
  const [categories, setCategories] = useState([]);
  const [hideBack, setHideBack] = useState(true);
  const handleToggleHide = () => {
    setHideBack(!hideBack);
  };
  const handleGetCategories = async () => {
    const res = await fetch("https://app.teamvokala.com/api/category");
    const data = await res.json();
    setCategories(data.data);
  };
  useEffect(() => {
    handleGetCategories();
  }, []);
  const handleChange = (panel) => (event, newExpanded) => {
    handleToggleHide();
    setExpanded(newExpanded ? panel : false);
  };
  const [expanded, setExpanded] = useState(categories[0]);
  return (
    <Grid mt={"5vh"} px={"2em"}>
      <Grid
        display={hideBack ? "none" : "block"}
        border={"1px solid lightgray"}
      >
        <p
          onClick={() => {
            handleToggleHide();
            setExpanded(0);
          }}
        >
          back
        </p>
      </Grid>
      {categories.map((category, index) => (
        <Accordion
          expanded={expanded === category.title}
          onChange={handleChange(category.title)}
          key={index}
        >
          <AccordionSummary
            sx={{ display: hideBack ? "flex" : "none" }}
            expandIcon={<FcExpand />}
          >
            {" "}
            {category.title}{" "}
          </AccordionSummary>
          <AccordionDetails>
            {category.subcategories.map((subcategory, indexx) => (
              <Typography key={indexx}> {subcategory.title} </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
