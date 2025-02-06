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
      <Container maxWidth="md" sx={{ textAlign: "center", bgcolor: "rgba(0, 0, 0, 0.6)", borderRadius: 3, p: 4, color: "white" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🎮 בחרו משחק 🎮
        </Typography>
        <Typography variant="h6" gutterBottom>
          בחרו את המשחק שאתם רוצים לשחק ולשפר את האנגלית שלכם
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={() => navigate("/memory-game")}>
              🧠 משחק זיכרון
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button fullWidth variant="contained" color="success" size="large" onClick={() => navigate("/word-building")}>
              🔤 בניית מילים
            </Button>
          </Grid>
          {/* הוספת כפתור למשחק ההרפתקה */}
          <Grid item xs={12} sm={6} md={4}>
            <Button fullWidth variant="contained" color="warning" size="large" onClick={() => navigate("/adventure-start")}>
              🏝️ משחק הרפתקה
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GameSelection;
