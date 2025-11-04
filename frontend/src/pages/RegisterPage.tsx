import React from 'react';
import { Card } from '../components/atoms';
import { RegisterForm } from '../components/organisms';

function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card padding="lg">
          <RegisterForm />
        </Card>
      </div>
    </div>
  );
}

export default RegisterPage;
