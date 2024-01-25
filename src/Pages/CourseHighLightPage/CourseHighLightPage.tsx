import { Box, Stack, Typography } from "@mui/material";
import Accordion from "../../Components/Accordion/Accordion";
import { style } from "./CourseHightLightPageStyle";

const CourseHighlightPage = () => {
  return (
    <Stack sx={style.accordionContainer}>
      <Accordion title="Introduction" serialNumber={1}>
        <Box>
          <Typography>1. Hello World</Typography>
          <Typography sx={style.grayTxt}>video - 17:30 mins</Typography>
        </Box>
      </Accordion>
      <Accordion title="Module 1" serialNumber={2}>
        <Box>
          <Typography>Drawing</Typography>
          <Typography sx={style.grayTxt}>video - 30:30 mins</Typography>
        </Box>
      </Accordion>
      <Accordion title="Module 2" serialNumber={3}>
        <Box>
          <Typography>Key board shortcuts</Typography>
          <Typography sx={style.grayTxt}>video - 17:30 mins</Typography>
        </Box>
      </Accordion>
      <Accordion title="Module 3" serialNumber={4}>
        <Box>
          <Typography>Module Test</Typography>
          <Typography sx={style.grayTxt}>Test - 1 hour</Typography>
        </Box>
      </Accordion>
      <Accordion title="Practice Tests" serialNumber={5}>
        <Stack gap={"0.8rem"}>
          <Accordion title="Test-1" serialNumber={1}>
            <Box>
              <Typography>Practice Test 1</Typography>
              <Typography sx={style.grayTxt}>Duration - 30 mins</Typography>
            </Box>
          </Accordion>
          <Accordion title="Test-2" serialNumber={2}>
            <Box>
              <Typography>Practice Test 2</Typography>
              <Typography sx={style.grayTxt}>Duration - 1 hour</Typography>
            </Box>
          </Accordion>
        </Stack>
      </Accordion>
      <Accordion title="Certification Test" serialNumber={6}>
        <></>
      </Accordion>
    </Stack>
  );
};

export default CourseHighlightPage;
