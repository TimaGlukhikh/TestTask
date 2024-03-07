import React from 'react'
import Link from 'next/link'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const CarTable = ({ data }) => {
  return (
    <Table sx={{ marginTop: '50px' }}>
      <TableHead sx={{ border:'3px solid rgba(224, 224, 224, 1)', bgcolor: 'rgba(0, 0, 0, 0.1)' }}>
        <TableRow>
          <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>ID</TableCell>
          <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>
            Марка
          </TableCell>
          <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>
            Модель
          </TableCell>
          <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>
            Тип
          </TableCell>
          <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>
            Продано всего
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((car) => (
          <TableRow key={car.id}>
            <TableCell sx={{ fontSize: '18px', fontWeight: '700' }}>
              <Link href={`/auto/${car.id}`}>
                <span>{car.id}</span>
              </Link>
            </TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '500' }}>
              {car.make}
            </TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '500' }}>
              {car.model}
            </TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '500' }}>
              {car.type}
            </TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '500' }}>
              {car.sales.length}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CarTable
