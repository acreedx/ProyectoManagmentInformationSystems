import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Costumer = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={6}>
      <span className="h1">Perspectiva Clientes</span>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="La perspectiva de clientes de la cafetería Alexander Coffee se puede evaluar a través de varios factores clave: el crecimiento del número de clientes, la satisfacción con los productos y las preferencias de los clientes."
        />
        
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Clientes</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Crecimiento de Clientes',
                    backgroundColor: '#6DE886',
                    data: [10, 15, 30, 40, 70, 80, 80, 80],
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
          <CCardHeader>Retencion de Clientes</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Retencion de clientes',
                    backgroundColor: '#6DE886',
                    data: [5, 15, 20, 30, 70, 60, 60, 70],
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
          <CCardHeader>Satisfacción del Cliente</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Malos comentarios', 'Buenos comentarios'],
                datasets: [
                  {
                    data: [240, 540],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default Costumer
