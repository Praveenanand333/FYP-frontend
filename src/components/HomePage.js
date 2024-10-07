import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormGroup, FormControlLabel, Checkbox, Button, Typography, Paper } from '@mui/material';

function HomePage() {
  const [selectedModals, setSelectedModals] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedModals((prev) => [...prev, value]);
    } else {
      setSelectedModals((prev) => prev.filter((modal) => modal !== value));
    }
  };

  const handleNext = () => {
    navigate('/form', { state: { selectedModals } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#e0f7fa',
        padding: 4
      }}
    >
      {/* Outer Container */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: '100%',
          textAlign: 'center',
          borderRadius: 4,
          backgroundColor: '#fffde7'
        }}
      >
        {/* Heading */}
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#00796b', mb: 4 }}>
          Autism Predictor
        </Typography>

        {/* Subheading */}
        <Typography variant="h5" gutterBottom sx={{ color: '#00695c', mb: 3 }}>
          Select Data Modalities
        </Typography>

        {/* Modalities Selection */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value="Image" onChange={handleCheckboxChange} />}
            label="Image"
          />
          <FormControlLabel
            control={<Checkbox value="EEG" onChange={handleCheckboxChange} />}
            label="EEG"
          />
          <FormControlLabel
            control={<Checkbox value="Behavioral" onChange={handleCheckboxChange} />}
            label="Behavioral Data"
          />
          <FormControlLabel
            control={<Checkbox value="EyeTracking" onChange={handleCheckboxChange} />}
            label="Eye Tracking"
          />
        </FormGroup>

        {/* Next Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ mt: 3, width: '100%', backgroundColor: '#00796b', ':hover': { backgroundColor: '#004d40' } }}
        >
          Next
        </Button>
      </Paper>
    </Box>
  );
}

export default HomePage;
