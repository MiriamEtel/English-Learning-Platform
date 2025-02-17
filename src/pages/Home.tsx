import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/adventure_game_start.jpg"; // ✅ תמונת הרקע

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`, // ✅ רקע מלא
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* כפתור מעבר לבחירת משחק (מעוצב כמו בדף ההרפתקה) */}
      <Button
        onClick={() => navigate("/game-selection")}
        sx={{
          background: "linear-gradient(to bottom, #2c82f5, #1665c1)",
          border: "5px solid #ffcc00",
          color: "#ffcc00",
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
        התחילו לשחק
      </Button>

      {/* ריבוע ירוק שקוף עם כותרת ותיאור על האתר */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20, // ✅ קרוב לתחתית עם רווח קטן
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(16, 232, 77, 0.7)", // ✅ שקיפות זהה למקורי
          padding: "15px 25px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
          direction: "rtl",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          width: "30%", // ✅ שומר על גודל אחיד גם במסכים קטנים
          maxWidth: "600px",
        }}
      >
        {/* כותרת ראשית מעוצבת */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: "36px",
            textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          🌟 המסע לאנגלית 🌟
        </Typography>

        {/* תיאור הפלטפורמה */}
        <Typography variant="h6" sx={{ mt: 1 }}>
          פלטפורמה  ללימוד אנגלית דרך משחקים מרתקים!  
          בואו לצאת למסע לימודי כיפי, לפתח את כישורי האנגלית שלכם,  
          וליהנות ממשחקים מרהיבים!  
        </Typography>
      </Box>
    </Box>
  );
}
