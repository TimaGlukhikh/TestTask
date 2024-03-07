import React from 'react'
import { useRouter } from 'next/router'
import carsData from '../../public/carsData.json'
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const AutoIdPage = () => {
  const router = useRouter()
  const { id } = router.query

  // Получение данных о продажах для выбранного автомобиля
  const autoSales = id
    ? carsData.filter((car) => car.id.toString() === id.toString())
    : []

  // Сортировка данных о продажах по дате в обратном порядке
  const sortedSales = autoSales.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <Container
      maxWidth="xl"
      sx={{
        textAlign: 'center',
        marginTop: '50px',
        bgcolor: '#f5f5f5',
        padding: '16px',
      }}
    >
      <Typography sx={{ fontSize: '40px', fontWeight: '700' }} variant="h3" marginBottom={10}>
        Список продаж для автомобиля ID: {id}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>Дата</TableCell>
              <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>Продавец</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSales.map((car, index) => (
              <React.Fragment key={index}>
                {car.sales.map((sale, i) => (
                  <TableRow key={i}>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell>{sale.reseller}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default AutoIdPage
