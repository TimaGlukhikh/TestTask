import React, { useState } from 'react'
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'

const FilterPanel = ({ onBrandChange, onTypeChange, onShopChange }) => {
  // Состояния для отслеживания выбранных значений
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedShops, setSelectedShops] = useState([])

  // Функции для обновления выбранных значений
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value)
    onBrandChange(event.target.value) // Вызов функции обратного вызова
  }

  const handleTypeChange = (event) => {
    setSelectedTypes(event.target.value)
    onTypeChange(event.target.value) // Вызов функции обратного вызова
  }

  const handleShopChange = (event) => {
    setSelectedShops(event.target.value)
    onShopChange(event.target.value) // Вызов функции обратного вызова
  }

  return (
    <Box>
      <FormControl style={{ width: '25%' }}>
        <InputLabel>Марка автомобиля</InputLabel>
        <Select value={selectedBrand} onChange={handleBrandChange}>
          <MenuItem value="">Все марки</MenuItem>
          <MenuItem value="BMW">BMW</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Tesla">Tesla</MenuItem>
          <MenuItem value="Mercedes">Mercedes</MenuItem>
          <MenuItem value="Infiniti">Infiniti</MenuItem>
        </Select>
      </FormControl>
      <TextField style={{ width: '25%' }} label="Модель" />
      <FormControl style={{ width: '25%' }}>
        <InputLabel>Тип</InputLabel>
        <Select value={selectedTypes} onChange={handleTypeChange} multiple>
          <MenuItem value="suv">SUV</MenuItem>
          <MenuItem value="hatchback">Hatchback</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="sedan">Sedan</MenuItem>
          <MenuItem value="universal">Universal</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: '25%' }}>
        <InputLabel>Магазин</InputLabel>
        <Select value={selectedShops} onChange={handleShopChange} multiple>
          <MenuItem value="shop-one">Shop-one</MenuItem>
          <MenuItem value="shop-two">Shop-two</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default FilterPanel
