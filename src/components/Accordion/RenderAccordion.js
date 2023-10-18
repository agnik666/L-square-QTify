import React from "react";
import styles from "./RenderAccordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ReactComponent as ExpandMoreIcon } from "../../assets/ExpandMoreIcon.svg";

function RenderAccordion() {
  return (
    <div className={styles.accordionSection}>
      <h1>FAQs</h1>
      <Box
        sx={{
          border: "1px solid #000",
          p: 2,
          mb: 2,
          width: "1135px",
          height: "78px",
        }}
      >
        <Accordion
          sx={{
            border: "1px solid #fff",
            borderRadius: "10px",
          }}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "10px",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: "1px solid #fff", borderRadius: "10px" }}>
          <AccordionSummary
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "10px",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default RenderAccordion;
