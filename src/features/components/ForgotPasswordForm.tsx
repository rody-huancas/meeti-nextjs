import Form from "@/shared/components/forms/Form";
import FormInput from "@/shared/components/forms/FormInput";
import FormLabel from "@/shared/components/forms/FormLabel";
import FormSubmit from "@/shared/components/forms/FormSubmit";

const ForgotPasswordForm = () => {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa tu E-mail" />

      <FormSubmit value="Enviar Instrucciones" />
    </Form>
  );
};

export default ForgotPasswordForm;
