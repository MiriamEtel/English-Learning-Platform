import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Stack, Container } from "@mui/material";

export default function Home() {
  const navigate = useNavigate(); // ⬅️ פתרון לבעיה

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/assets/images/background_resized.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          borderRadius: 3,
          p: 4,
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          המרוץ לאנגלית
        </Typography>
        <Typography variant="h6" gutterBottom>
          למדו אנגלית בצורה חווייתית ומהנה
        </Typography>
        <Stack spacing={2} mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/game-selection")} // ✅ עכשיו זה יעבוד!
          >
            📚 התחל משחק
          </Button>
          <Button variant="contained" color="secondary" size="large">
            🏆 טבלת אלופים
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
