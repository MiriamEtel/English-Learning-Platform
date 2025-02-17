import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/images/background_coming_soon.jpg"; // רקע מתאים

const GameComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* הודעה על המשחק */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#ffcc00",
          padding: "15px 25px",
          borderRadius: "15px",
          direction: "rtl",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          mb: 3,
        }}
      >
         משחק חדש בדרך!  
      </Typography>

      <Typography
        variant="h5"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px 20px",
          direction: "rtl",
          borderRadius: "10px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)",
          maxWidth: "600px",
          mb: 5,
        }}
      >
        אנחנו עובדים על משחק חדש ומלהיב!  
        חזרו בקרוב לגלות ולהתנסות בעצמכם! 
      </Typography>

      {/* כפתור חזרה לבחירת משחק */}
      <Button
        onClick={() => navigate("/game-selection")}
        sx={{
          background: "linear-gradient(to bottom, #2c82f5, #1665c1)",
          border: "4px solid #ffcc00",
          color: "#ffcc00",
          fontSize: "22px",
          fontWeight: "bold",
          padding: "12px 30px",
          borderRadius: "50px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          boxShadow: "0px 6px 0px #c29200, 0px 10px 20px rgba(0, 0, 0, 0.4)",
          position: "absolute",
           bottom: 40,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            background: "linear-gradient(to bottom, #1b6ed6, #0e4b99)",
            boxShadow: "0px 3px 0px #a97c00, 0px 6px 10px rgba(0, 0, 0, 0.4)",
            transform: "translateY(3px)",
          },
          "&:active": {
            background: "linear-gradient(to bottom, #0e4b99, #092f66)",
            boxShadow: "0px 1px 0px #7a5a00",
            transform: "translateY(5px)",
          },
        }}
      >
        🔙 חזרה לבחירת משחקים
      </Button>
    </Box>
  );
};

export default GameComingSoon;
