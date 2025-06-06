import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from '@bombillazo/rhf-plus';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="bill"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && 'This is required'}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="luo"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && 'This is required'}
        </div>

        <div>
          <label htmlFor="email" placeholder="email@hotmail.com">
            Email
          </label>
          <input {...register('email', { required: true })} />
          {errors.email && 'This is required'}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
