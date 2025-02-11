import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundImage from "../../assets/images/level_selection_bg.jpg"; // תמונת הרקע
import easyImage from "../../assets/images/easy.png"; // תמונת הכפתור קל
import mediumImage from "../../assets/images/medium.png"; // תמונת הכפתור בינוני
import hardImage from "../../assets/images/hard.png"; // תמונת הכפתור קשה

const levels = [
  { value: "easy", image: easyImage },
  { value: "medium", image: mediumImage },
  { value: "hard", image: hardImage },
];

const LevelSelection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedHero = location.state?.hero || "hero1"; // 🔹 מקבל את הדמות שנבחרה מהמסך הקודם

  // מעבר למפת המשחק עם הדמות הנבחרת ורמת הקושי
  const handleLevelSelect = (level: string) => {
    navigate("/adventure/game-map", { state: { level, hero: selectedHero } });
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* כפתורי רמות הקושי */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          top: "60px", // 🔹 הזזה כלפי מטה
        }}
      >
        {levels.map((level, index) => (
          <Box
            key={index}
            onClick={() => handleLevelSelect(level.value)} // 🔹 שומר על הדמות ומעביר גם את רמת הקושי
            sx={{
              width: "350px", // 🔹 כפתורים גדולים יותר
              height: "350px",
              backgroundImage: `url(${level.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              margin: "-35px", // 🔹 מקטין את הרווח בין הכפתורים
              "&:hover": {
                transform: "scale(1.05)", // אפקט hover עדין
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LevelSelection;
