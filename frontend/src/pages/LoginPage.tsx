import React from 'react';
import { Card } from '../components/atoms';
import { LoginForm } from '../components/organisms';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card padding="lg">
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
