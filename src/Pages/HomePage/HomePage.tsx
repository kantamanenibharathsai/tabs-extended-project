import { Box, Button } from "@mui/material";
import { useState } from "react";
import CourseHighlightPage from "../CourseHighLightPage/CourseHighLightPage";
import FAQPage from "../FAQPage/FAQPage";
import InstructorDetailsPage from "../InstructorDetailsPage/InstructorDetailsPage";
import RatingsDetailsPage from "../RatingDetailsPage/RatingsDetailsPage";
import RelevantJobsPage from "../RelevantJobsPage/RelevantJobsPage";
import SkillInformationPage from "../SkillInformationPage/SkillInformationPage";
import StudentsEnrolledPage from "../StudentsEnrolledPage/StudentsEnrolledPage";
import { styles } from "./HomePageStyles";
const options = [
  "course highlight",
  "instructor details",
  "skill information",
  "rating details",
  "relevant jobs",
  "no of students enrolled",
  "FAQ's",
];

interface IState {
  activeOption: number;
}

const HomePage = () => {
  const [activeOption, setActiveOption] = useState<IState["activeOption"]>(0);

  const checkActiveTabComponent = () => {
    switch (activeOption) {
      case 1:
        return <InstructorDetailsPage />;
      case 2:
        return <SkillInformationPage />;
      case 3:
        return <RatingsDetailsPage />;
      case 4:
        return <RelevantJobsPage />;
      case 5:
        return <StudentsEnrolledPage />;
      case 6:
        return <FAQPage />;
      default:
        return <CourseHighlightPage />;
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.tabsContainer}>
        {options.map((option, index) => (
          <Button
            variant="text"
            key={option}
            disableRipple
            disableFocusRipple
            disableElevation
            disableTouchRipple
            sx={{
              ...styles.tab,
              opacity: `${index !== activeOption ? 0.5 : 1}`,
              "&::after": {
                ...styles.tabsAfter,
                bgcolor: `${
                  index === activeOption ? "#E36419" : "transparent"
                }`,
              },
            }}
            onClick={() => setActiveOption(index)}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Box sx={{ textAlign: `${activeOption !== 0 ? "center" : "start"}` }}>
        {checkActiveTabComponent()}
      </Box>
    </Box>
  );
};

export default HomePage;
