import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/background_wide.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          bgcolor: "rgba(0, 0, 0, 0.55)", // ✅ רקע כהה שקוף
          borderRadius: 3,
          p: 4,
          color: "white",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.36)",
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
           בחרו משחק 
        </Typography>
        <Typography variant="h5" gutterBottom>
          בחרו את המשחק שאתם רוצים לשחק ולשפר את האנגלית שלכם
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {/* משחק זיכרון */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              onClick={() => navigate("/memory-game")}
              sx={{
                background: "linear-gradient(to bottom, #2c82f5, #1665c1)",
                border: "4px solid #ffcc00",
                color: "#ffcc00",
                fontSize: "22px",
                fontWeight: "bold",
                padding: "12px 20px",
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
              🧠 משחק זיכרון
            </Button>
          </Grid>

          {/* בניית מילים */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              onClick={() => navigate("/word-building")}
              sx={{
                background: "linear-gradient(to bottom, #16a085, #0e6b57)",
                border: "4px solid #ffcc00",
                color: "#ffcc00",
                fontSize: "22px",
                fontWeight: "bold",
                padding: "12px 20px",
                borderRadius: "50px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                boxShadow: "0px 6px 0px #c29200, 0px 10px 20px rgba(0, 0, 0, 0.4)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  background: "linear-gradient(to bottom, #13976f, #0b5946)",
                  boxShadow: "0px 3px 0px #a97c00, 0px 6px 10px rgba(0, 0, 0, 0.4)",
                  transform: "translateY(3px)",
                },
                "&:active": {
                  background: "linear-gradient(to bottom, #0b5946, #073c2e)",
                  boxShadow: "0px 1px 0px #7a5a00",
                  transform: "translateY(5px)",
                },
              }}
            >
              ✍️ משחק מילים
            </Button>
          </Grid>

          {/* משחק הרפתקה */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              onClick={() => navigate("/adventure-start")}
              sx={{
                background: "linear-gradient(to bottom, #e67e22, #d35400)",
                border: "4px solid #ffcc00",
                color: "#ffcc00",
                fontSize: "22px",
                fontWeight: "bold",
                padding: "12px 20px",
                borderRadius: "50px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                boxShadow: "0px 6px 0px #c29200, 0px 10px 20px rgba(0, 0, 0, 0.4)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  background: "linear-gradient(to bottom, #cf711f, #b84700)",
                  boxShadow: "0px 3px 0px #a97c00, 0px 6px 10px rgba(0, 0, 0, 0.4)",
                  transform: "translateY(3px)",
                },
                "&:active": {
                  background: "linear-gradient(to bottom, #b84700, #8f3700)",
                  boxShadow: "0px 1px 0px #7a5a00",
                  transform: "translateY(5px)",
                },
              }}
            >
              🏝️ משחק הרפתקה
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GameSelection;
