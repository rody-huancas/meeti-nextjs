"use client";

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Form from "@/shared/components/forms/Form";
import FormInput from "@/shared/components/forms/FormInput";
import FormLabel from "@/shared/components/forms/FormLabel";
import FormError from '@/shared/components/forms/FormError';
import FormSubmit from "@/shared/components/forms/FormSubmit";
import { signInAction } from '../actions/auth.actions';
import { SignInInput, SignInSchema } from '../schemas/auth.schema';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignInInput) => {
    const { success, error } = await signInAction(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        {...register("email")}
      />
      { errors.email && <FormError>{errors.email.message}</FormError> }

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
        {...register("password")}
      />
      { errors.password && <FormError>{errors.password.message}</FormError> }

      <FormSubmit value="Iniciar Sesión" disabled={isSubmitting} />
    </Form>
  );
};

export default LoginForm;
