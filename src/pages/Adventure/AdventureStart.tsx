import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/adventure_game_start.jpg"; // 👈 ייבוא התמונה

const AdventureStart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // 👈 שימוש בתמונה
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative", // חשוב עבור מיקום הטקסט
      }}
    >
      {/* כפתור התחל משחק */}
      <Button
        onClick={() => navigate("/adventure/character-selection")}
        sx={{
          background: "linear-gradient(to bottom, #2c82f5, #1665c1)",
          border: "5px solid #ffcc00",
          color: " #ffcc00",
          fontSize: "27px",
          fontWeight: "bold",
          padding: "14px 95px",
          borderRadius: "50px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          boxShadow: "0px 6px 0px #c29200, 0px 10px 20px rgba(0, 0, 0, 0.4)",
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
        התחל משחק
      </Button>

      {/* שורת ההסבר בתחתית */}
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          bottom: 20, // שומר על טקסט בתחתית
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          backgroundColor: "rgba(16, 232, 77, 0.6)",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
         הרפתקה לימודית-צאו למסע ותלמדו אנגלית בדרך כיפית ומאתגרת 
      </Typography>
    </Box>
  );
};

export default AdventureStart;
