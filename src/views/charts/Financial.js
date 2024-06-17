import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartLine,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Financial = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
        <span className="h1">Perspectiva Financiera</span>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="La perspectiva financiera de la cafetería Alexander Coffee se puede evaluar a través de varios indicadores clave: el margen de beneficio, los ingresos por cliente, la reducción de costos operativos y el crecimiento de ventas mensuales."
        />
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Margen de Beneficio Neto Por 6 Meses</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Margen de Beneficio (%)',
                    backgroundColor: '#EBAC23',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Crecimiento de Ventas  de Mercado Internacional Por 6 Meses</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Crecimiento de Ventas (%)',
                    backgroundColor: '#f87979',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Reducción de Costos Operativos Por 6 Meses</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Reducción de Costos (%)',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Crecimiento de Ventas Mensuales Nacionales Por 6 Meses</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Crecimiento de Ventas (%)',
                    backgroundColor: '#f87979',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Financial
