"use client";

import Form from "@/shared/components/forms/Form";
import FormInput from "@/shared/components/forms/FormInput";
import FormLabel from "@/shared/components/forms/FormLabel";
import FormSubmit from "@/shared/components/forms/FormSubmit";

const RegisterForm = () => {
  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput id="name" placeholder="Ingresa tu Nombre" />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput id="email" type="email" placeholder="Ingresa tu E-mail" />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Contraseña - Min. 8 Caracteres"
      />

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite tu contraseña"
      />

      <FormSubmit value="Registrarme" />
    </Form>
  );
};

export default RegisterForm;
