"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/shared/components/forms/Form";
import FormError from "@/shared/components/forms/FormError";
import FormInput from "@/shared/components/forms/FormInput";
import FormLabel from "@/shared/components/forms/FormLabel";
import FormSubmit from "@/shared/components/forms/FormSubmit";
import { signUpAction } from "@/features/auth/actions/auth.actions";
import { SignUpInput, SignUpSchema } from "@/features/auth/schemas/auth.schema";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "all"
  });

  const onSubmit = async (data: SignUpInput) => {
    await signUpAction(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        placeholder="Ingresa tu Nombre"
        {...register("name")}
      />
      { errors.name && <FormError>{errors.name.message}</FormError> }

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu E-mail"
        {...register("email")}
      />
      { errors.email && <FormError>{errors.email.message}</FormError> }

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Contraseña - Min. 8 Caracteres"
        {...register("password")}
      />
      { errors.password && <FormError>{errors.password.message}</FormError> }

      <FormLabel htmlFor="passwordConfirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="passwordConfirmation"
        type="password"
        placeholder="Repite tu contraseña"
        {...register("passwordConfirmation")}
      />
      { errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError> }

      <FormSubmit value="Registrarme" />
    </Form>
  );
};

export default RegisterForm;
