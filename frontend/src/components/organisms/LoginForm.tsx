import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Text } from '../atoms';
import { FormField } from '../molecules';
import { useAuth } from '../../hooks';
import { loginSchema, ROUTES } from '../../utils';
import { LoginCredentials } from '../../types';

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await login(data);
      navigate(ROUTES.HOME);
    } catch (error) {
      // Error is handled by the store and displayed via toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Text variant="h2" className="text-center mb-2">
          Welcome Back
        </Text>
        <Text variant="body" color="secondary" className="text-center">
          Sign in to your account to continue
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
        placeholder="Enter your password"
        error={errors.password?.message}
        required
        {...register('password')}
      />

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Sign In
      </Button>

      <div className="text-center">
        <Text variant="small" color="secondary">
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER} className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </Link>
        </Text>
      </div>
    </form>
  );
}

export default LoginForm;
