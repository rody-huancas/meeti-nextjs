"use client";

import Form from "@/shared/components/forms/Form";
import FormInput from "@/shared/components/forms/FormInput";
import FormLabel from "@/shared/components/forms/FormLabel";
import FormSubmit from "@/shared/components/forms/FormSubmit";

const LoginForm = () => {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa tu E-mail" />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu contraseña"
      />

      <FormSubmit value="Iniciar Sesión" />
    </Form>
  );
};

export default LoginForm;
