import { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import LocationDateReserve from '@/components/DateReserve';

export default function Booking() {


  return (
    <main className="p-6 max-w-lg mx-auto space-y-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold text-black text-center">Venue Booking</h1>
      
      <form className="space-y-4">
        {/* Name-Lastname Field */}
        <TextField
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          fullWidth
        />
        
        {/* Contact Number Field */}
        <TextField
          label="Contact-Number"
          name="Contact-Number"
          variant="standard"
          fullWidth
          required
          
        />
        
        {/* Select Venue */}
        <TextField
          select
          label="Select Venue"
          id="venue"
          variant="standard"
          fullWidth
          required
          
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </TextField>
        
        {/* Date Picker Component */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Select Date</label>
          <LocationDateReserve />
        </div>
        
        {/* Book Button */}
        <Button
          type="submit"
          name="Book Vanue"
          fullWidth
          variant="contained"
          color="primary"
          className="!mt-4"
        >
          Book Venue
        </Button>
      </form>
    </main>
  );
}

