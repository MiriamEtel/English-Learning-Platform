import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import mapBackground from "../../assets/images/map.jpg";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import moveSound from "../../assets/sounds/move.mp3";

const locations = [
  { name: "🏡 הכפר השקט", x: 27, y: 35, message: "אנחנו יוצאים למסע ! מוכנים? " },
  { name: "🏡 הכפר השקט", x: 27, y: 35, message: "ברוך הבא לכפר! מתרגשים לראותך " },
  { name: "🏰 הטירה הקסומה", x: 42, y: 17, message: "הגעת לטירה קסומה! מה מסתתר בפנים?" },
  { name: "🌳 היער הקסום", x: 42, y: 43, message: "עצים גבוהים ולחשושים... אולי חיות יער מסתתרות פה!" },
  { name: "המזרקה המסתורית", x: 12, y: 70, message: "מזרקה מסתורית מפכה" },
  { name: "💦 המפל הקסום", x: 74, y: 57, message: "מפל מבריק זורם כאן! תרגיש את רסיסי המים הקרים!" },
  { name: "🏆 שער הניצחון", x: 74, y: 16, message: "הגעת לסוף המסע! תוכל להגיע לפסגה?" },
];

const GameMap: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedHero = location.state?.hero || "hero1";
  const difficulty = location.state?.level || "easy";
  const [currentStep, setCurrentStep] = useState(location.state?.step ?? 0);
  const [posX, setPosX] = useState(locations[currentStep].x);
  const [posY, setPosY] = useState(locations[currentStep].y);
  const [isJumping, setIsJumping] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [awaitingMove, setAwaitingMove] = useState(true); // הכפתור תמיד זמין אחרי מבחן

  const heroImages: Record<string, string> = {
    hero1,
    hero2,
    hero3,
    hero4,
  };

  useEffect(() => {
    if (location.state?.step !== undefined) {
      setCurrentStep(location.state?.step);
      setPosX(locations[location.state?.step].x);
      setPosY(locations[location.state?.step].y);
      setAwaitingMove(true); // מאפשר לחיצה להמשך
    }
  }, [location.state?.step]);

  const handleNext = () => {
    if (!awaitingMove) return;

    setAwaitingMove(false);

    if (currentStep < locations.length - 1) {
        setIsJumping(true);
        setShowMessage(false);
        const audio = new Audio(moveSound);
        audio.play();

        const nextLocation = locations[currentStep + 1];
        let steps = 10;
        let stepX = (nextLocation.x - posX) / steps;
        let stepY = (nextLocation.y - posY) / steps;
        let count = 0;

        const moveInterval = setInterval(() => {
            count++;
            setPosX((prevX) => prevX + stepX);
            setPosY((prevY) => prevY + stepY);

            if (count >= steps) {
                clearInterval(moveInterval);
                setIsJumping(false);
                setCurrentStep((prevStep: number) => prevStep + 1);
                setShowMessage(true);

                setTimeout(() => {
                    navigate("/adventure-game", {
                        state: { 
                            level: difficulty, 
                            step: currentStep + 1, 
                            hero: selectedHero, 
                            location: nextLocation.name,
                            questionIndex: location.state?.questionIndex || 0, 
                            score: location.state?.score || 0, // שמירת הציון
                            totalQuestions: location.state?.totalQuestions || 0, // שמירת מספר השאלות
                        },
                    });
                }, 1500);
            }
        }, 100);
    } else {
        // 🔹 כאן אנו מעבירים את הציון הסופי ומספר השאלות לדף הסיום
        navigate("/adventure/completion", {
            state: { 
                score: location.state?.score || 0, 
                totalQuestions: location.state?.totalQuestions || 0 
            }
        });
    }
};



  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${mapBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          textAlign: "center",
          direction: "rtl",
        }}
      >
        הגעת ל: {locations[currentStep].name}
      </Typography>

      {showMessage && (
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            bottom: "20%",
            backgroundColor: "rgba(168, 23, 23, 0.7)",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            fontWeight: "bold",
            textAlign: "right", // 🔹 מיישר לימין
            direction: "rtl",
          }}
        >
          {locations[currentStep].message}
        </Typography>
      )}

      {/* דמות השחקן */}
      <img
        src={heroImages[selectedHero]}
        alt="דמות השחקן"
        style={{
          position: "absolute",
          width: "80px",
          left: `${posX}%`,
          top: `${posY}%`,
          transition: "top 0.2s ease-in-out, left 0.2s ease-in-out",
          transform: isJumping ? "translateY(-15px)" : "translateY(0px)",
        }}
      />

      {/* כפתור המשך */}
      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          bottom: 30,
          backgroundColor: "#ffcc00",
          border: "none",
          padding: "15px 40px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#ffdd44",
          },
        }}
      >
        המשך במסע →
      </Button>
    </Box>
  );
};

export default GameMap;
