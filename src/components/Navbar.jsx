import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ color }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: 5,
        width: "100%",
        overflow: "hidden",
        borderBottom: "none",
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: "32px", md: "32px", lg: "16px" },
        }}
      >
        <Box
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <svg
              width="48"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.817 6.15225L1.881 6.74825L5.377 8.72129L5.79901 8.96029C6.44201 9.31829 7.16701 9.50129 7.89201 9.50129C8.60701 9.50129 9.33201 9.31829 9.97401 8.96029L13.893 6.74825L14.957 6.15225C15.471 5.86825 15.783 5.33625 15.783 4.74825C15.783 4.16125 15.471 3.62925 14.957 3.34425L9.97401 0.53625C8.69001 -0.17875 7.09301 -0.17875 5.79901 0.53625L0.817 3.34425C0.303 3.62925 0 4.16125 0 4.74825C0 5.33625 0.303 5.86825 0.817 6.15225Z"
                fill="#3777F5"
                fillOpacity="0.9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.817 9.15225L1.881 9.74825L5.377 11.7213L5.79901 11.9603C6.44201 12.3183 7.16701 12.5013 7.89201 12.5013C8.60701 12.5013 9.33201 12.3183 9.97401 11.9603L13.893 9.74825L14.957 9.15225C15.471 8.86825 15.783 8.33625 15.783 7.74825C15.783 7.16125 15.471 6.62925 14.957 6.34425L9.97401 3.53625C8.69001 2.82125 7.09301 2.82125 5.79901 3.53625L0.817 6.34425C0.303 6.62925 0 7.16125 0 7.74825C0 8.33625 0.303 8.86825 0.817 9.15225Z"
                fill="#3777F5"
                fillOpacity="0.8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.817 12.1522L1.881 12.7482L5.377 14.7213L5.79901 14.9603C6.44201 15.3183 7.16701 15.5013 7.89201 15.5013C8.60701 15.5013 9.33201 15.3183 9.97401 14.9603L13.893 12.7482L14.957 12.1522C15.471 11.8682 15.783 11.3363 15.783 10.7483C15.783 10.1612 15.471 9.62925 14.957 9.34425L9.97401 6.53625C8.69001 5.82125 7.09301 5.82125 5.79901 6.53625L0.817 9.34425C0.303 9.62925 0 10.1612 0 10.7483C0 11.3363 0.303 11.8682 0.817 12.1522Z"
                fill="#4A84F6"
                fillOpacity="0.7"
              />
            </svg>
            <Typography
              fontSize="21px"
              fontWeight="bold"
              ml={1.5}
              color={color}
            >
              KVN
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
