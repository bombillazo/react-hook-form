import { useForm, Form } from '@bombillazo/rhf-plus';
import React from 'react';

export default function FormComponent() {
  const methods = useForm<{
    test: string;
  }>({
    defaultValues: {
      test: '',
    },
  });

  return (
    <Form control={methods.control} action={'/test'}>
      <input {...methods.register('test')} />
      <button>Submit</button>
    </Form>
  );
}
