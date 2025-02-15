import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/completion_bg.jpg"; // תמונת הרקע

const GameCompletion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  console.log("✅ Score:", score, "Total Questions:", total);
  return (
    <div
      style={{
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
        color: "white",
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* 🔹 תיבת טקסט עם רקע שקוף 🔹 */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
          maxWidth: "80%",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px", color: "#ffcc00" }}>
          🎉 ! סיימת את המשחק 🎉
        </h1>
        <p style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "30px" }}>
          הצלחת ב {score} מתוך 12 שאלות
        </p>

        {/* 🔹 כפתור עם אפקט hover 🔹 */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(to bottom, #ffcc00, #ff9900)",
            border: "none",
            padding: "15px 40px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          🔄 חזרה לדף הראשי
        </button>
      </div>
    </div>
  );
};

export default GameCompletion;
