import React, { useState } from 'react'
import FilterPanel from '../components/FilterPanel'
import CarTable from '../components/CarTable'
import carsData from '../public/carsData.json'
import { Container, Typography, Box } from '@mui/material'

const AutoSelectPage = () => {
  const [filters, setFilters] = useState({
    brand: '',
    types: [],
    shops: [],
  })

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }

  const filteredData = carsData.filter((car) => {
    return (
      (!filters.brand || car.make === filters.brand) &&
      (!filters.types.length || filters.types.includes(car.type)) &&
      (!filters.shops.length ||
        car.sales.some((sale) => filters.shops.includes(sale.reseller)))
    )
  })

  return (
    <Container maxWidth="xl">
     <Box my={10} textAlign="center" bgcolor="#f5f5f5" padding={4}>
        <Typography sx={{ fontSize: '40px', fontWeight: '700' }} variant="h1" marginBottom={10}>
          Список продаж автомобилей
        </Typography>
        <FilterPanel
          onBrandChange={(value) => handleFilterChange('brand', value)}
          onTypeChange={(value) => handleFilterChange('types', value)}
          onShopChange={(value) => handleFilterChange('shops', value)}
        />
        <CarTable data={filteredData} />
      </Box>
    </Container>
  )
}

export default AutoSelectPage
