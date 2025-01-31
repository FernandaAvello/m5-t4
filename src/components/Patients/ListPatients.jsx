import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Alert, Card } from "antd";
import axios from 'axios';

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPatients = async () => {
    setLoading(true);
    setError(false);
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const response = await axios.get('http://localhost:3000/patients', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPatients(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patients:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {loading && <Spin size="large" />}
      {error && <Alert message="Error al cargar los datos" type="error" />}
      {!loading && !error && (
        <Row gutter={[16, 16]}>
          {patients.map(patient => (
            <Col key={patient.id} span={8}>
              <Card title={patient.name}>
                <p><strong>Edad:</strong> {patient.age}</p>
                <p><strong>Fecha de Nacimiento:</strong> {patient.birthdate}</p>
                <p><strong>Teléfono:</strong> {patient.phone}</p>
                <h3>Citas:</h3>
                {patient.appointments.map((appointment, index) => (
                  <p key={index}>
                    <strong>Fecha:</strong> {appointment.date}<br />
                    <strong>Doctor:</strong> {appointment.doctor}
                  </p>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ListPatients;