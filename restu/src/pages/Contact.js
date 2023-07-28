import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, textAlign: "center", "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Please feel free to reach out to us for any inquiries or assistance.
          Our support team is here to help you. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem odio beatae ducimus magni nobis
          culpa praesentium velit expedita quae, corrupti, pariatur inventore
          laboriosam consectetur modi impedit error, repudiandae obcaecati
          doloribus.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: "auto",
          mr: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          overflow: "hidden",
          "@media (max-width:600px)": {
            width: "90%",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#1A1A19",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pr: 1 }} />
                  <span style={{ color: "#1A1A19", fontWeight: "bold" }}>
                    Support:
                  </span>{" "}
                  100 (Toll-Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pr: 1 }} />
                  <span style={{ color: "#1A1A19", fontWeight: "bold" }}>
                    Email:
                  </span>{" "}
                  samririk2000@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pr: 1 }} />
                  <span style={{ color: "#1A1A19", fontWeight: "bold" }}>
                    Phone:
                  </span>{" "}
                  7388761280
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ flex: "1" }} />
    </Layout>
  );
};

export default Contact;
