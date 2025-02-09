import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/images/character_selection_bg.jpg"; // רקע המסך
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero 4.png";

const CharacterSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const heroes = [
    { name: "מטייל", image: hero1 },
    { name: "הרפתקן", image: hero3 },
    { name: "חוקר", image: hero2 },
    { name: "מגלה ארצות", image: hero4 },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="white"
        sx={{
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
          mb: 3,
        }}
      >
        בחרו את הדמות שלכם
      </Typography>

      {/* הצגת הדמויות */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {heroes.map((hero) => (
          <Box
            key={hero.name}
            onClick={() => setSelectedHero(hero.name)}
            sx={{
              cursor: "pointer",
              border: selectedHero === hero.name ? "4px solid gold" : "4px solid transparent",
              borderRadius: "10px",
              padding: "10px",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <img src={hero.image} alt={hero.name} width="120px" />
            <Typography variant="h6" color="white" mt={1}>
              {hero.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* כפתור המשך */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          background: selectedHero ? "gold" : "gray",
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "10px 30px",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
          "&:hover": {
            background: selectedHero ? "darkgoldenrod" : "gray",
          },
        }}
        disabled={!selectedHero}
        onClick={() => navigate("/adventure/level-selection", { state: { character: selectedHero } })}
      >
        המשך למשחק
      </Button>
    </Box>
  );
};

export default CharacterSelection;
