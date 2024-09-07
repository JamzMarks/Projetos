import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();
  if (params.user !== 'jamzmarks') {
    return <Navigate to='/' />;
  }
  return (
    <div>
      <h1>Área restrita!</h1>
    </div>
  );
}