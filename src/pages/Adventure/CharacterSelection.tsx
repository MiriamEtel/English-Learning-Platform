import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/images/character_selection_bg.jpg"; // רקע המסך
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";

const CharacterSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const heroes = [
    { name: "hero1", displayName: "מטייל", image: hero1 },
    { name: "hero2", displayName: "חוקר", image: hero2 },
    { name: "hero3", displayName: "הרפתקן", image: hero3 },
    { name: "hero4", displayName: "מגלה ארצות", image: hero4 },
  ];

  const handleHeroSelection = (heroName: string) => {
    console.log("🚀 דמות נבחרה:", heroName);
    setSelectedHero(heroName);
  };

  const handleProceed = () => {
    console.log("📌 נשלח לעמוד הבא עם הדמות:", selectedHero);
    navigate("/adventure/level-selection", { state: { hero: selectedHero } });
  };

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
            onClick={() => handleHeroSelection(hero.name)}
            sx={{
              cursor: "pointer",
              border: selectedHero === hero.name ? "4px solid gold" : "4px solid transparent",
              borderRadius: "10px",
              padding: "10px",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <img src={hero.image} alt={hero.displayName} width="120px" />
            <Typography variant="h6" color="white" mt={1}>
              {hero.displayName}
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
        onClick={handleProceed}
      >
        המשך למשחק
      </Button>
    </Box>
  );
};

export default CharacterSelection;
