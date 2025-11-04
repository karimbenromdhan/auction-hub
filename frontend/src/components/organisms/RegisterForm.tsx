import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Text } from '../atoms';
import { FormField } from '../molecules';
import { useAuth } from '../../hooks';
import { registerSchema, ROUTES } from '../../utils';
import { RegisterFormData } from '@/interfaces';

function RegisterForm() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({ email: data.email, password: data.password });
      navigate(ROUTES.HOME);
    } catch (error) {
      // Error is handled by the store and displayed via toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Text variant="h2" className="text-center mb-2">
          Create Account
        </Text>
        <Text variant="body" color="secondary" className="text-center">
          Sign up to start bidding on auctions
        </Text>
      </div>

      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        required
        {...register('email')}
      />

      <FormField
        label="Password"
        type="password"
        placeholder="Create a password"
        error={errors.password?.message}
        required
        {...register('password')}
      />

      <FormField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        required
        {...register('confirmPassword')}
      />

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Create Account
      </Button>

      <div className="text-center">
        <Text variant="small" color="secondary">
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN} className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </Text>
      </div>
    </form>
  );
}

export default RegisterForm;
