import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface Errors {
  name?: string;
  email?: string;
}

interface Touched {
  name: boolean;
  email: boolean;
}

const GenericForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (touched.name && !formData.name) {
      setErrors((errors) => ({
        ...errors,
        name: 'Name is required',
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        name: '',
      }));
    }

    if (touched.email && !formData.email) {
      setErrors((errors) => ({
        ...errors,
        email: 'Email is required',
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        email: '',
      }));
    }
  }, [formData, touched]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setTouched((touched) => ({
      ...touched,
      [name]: true,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      return;
    }

    console.log('handle form submit');
  };

  const isFormValid = () => {
    return Object.values(errors).every((value) => value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[450px]">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Name
          </label>
          {errors.name && (
            <p className="text-red-800 italic mt-2">{errors.name}</p>
          )}
        </div>

        <div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
            {errors.email && (
              <p className="text-red-800 italic mt-2">{errors.email}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full hover:cursor-pointer"
          disabled={isFormValid()}
        >
          <div className="mt-8 flex justify-center bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition">
            Submit{' '}
          </div>
        </button>
      </div>
    </form>
  );
};

export default GenericForm;
