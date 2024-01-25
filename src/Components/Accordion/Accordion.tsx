import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { style } from "./AccordionStyles";
interface IState {
  isOpen: boolean;
}

interface IProps {
  children: ReactNode;
  title: string;
  serialNumber: number;
}

const Accordion = ({ children, title, serialNumber }: IProps) => {
  const [isOpen, setIsOpen] = useState<IState["isOpen"]>(false);
  const handleIsAccordionOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const checkSerialNumber = (number: number) => {
    if (number < 10) return `0${number}`;
    return number;
  };
  return (
    <Box sx={style.container}>
      <Stack
        sx={{
          ...style.accordionHeader,
          bgcolor: { xs: "white", md: `${isOpen ? "#E0E0E0" : "white"}` },
        }}
        onClick={handleIsAccordionOpen}
      >
        <Typography>
          <Typography component={"span"} sx={style.serialNo}>
            {checkSerialNumber(serialNumber)}
          </Typography>
          {title}
        </Typography>
        <IconButton>
          <KeyboardArrowDownOutlinedIcon
            sx={{
              rotate: isOpen ? "180deg" : "0deg",
              ...style.slowMo,
            }}
          />
        </IconButton>
      </Stack>
      <Box
        id="accordionContent"
        sx={{
          ...style.accordionContentWrapper,
          height: isOpen ? "auto" : "0px",
          py: isOpen ? "1rem" : 0,
          transform: `scaleY(${isOpen ? 1 : 0})`,
          transformOrigin: "top",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Accordion;
