import backgroundImage from '@assets/images/auth-bg.jpg';
import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  registerSchema,
  type RegisterFormData,
} from '@schemas/register.schema';
import { Input } from '@components/input';
import { Button } from '@components/buttons';
import { Typography } from '@components/typography';
import icon from '@assets/images/PizzaPlanet-icon.png';

export function Register(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>(
    {
      resolver: zodResolver(
        registerSchema
      ),
    }
  );

  function onSubmit(
    data: RegisterFormData
  ): void {
    console.log(data);
    alert(
      'Create account form submitted!'
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize:
            'cover',
          backgroundPosition:
            'center',
          backgroundRepeat:
            'no-repeat',
        }}
      >
        {/* Overlay escuro (opcional) */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Conteúdo da página de autenticação */}

        <div className=" flex items-center justify-center h-screen">
          <div className="bg-(--auth-card-bg) p-8  rounded-lg shadow-lg">
            {/* Conteúdo interativo */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div>
                <div className="flex justify-center gap-4 flex-col items-center">
                  <img
                    src={icon}
                    className="w-30 items-center"
                    alt="Icon"
                  />
                  <Typography
                    variant="h3"
                    className="text-white mb-6 text-center"
                  >
                    Welcome to
                    Pizza
                    Planet
                    <br />
                    System!
                  </Typography>
                </div>
                <form
                  onSubmit={handleSubmit(
                    onSubmit
                  )}
                  className="space-y-4 justify-center flex flex-col w-80"
                >
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    {...register(
                      'email'
                    )}
                    error={
                      errors
                        .email
                        ?.message
                    }
                  />

                  <Input
                    label="Username"
                    placeholder="seu Username"
                    {...register(
                      'username'
                    )}
                    error={
                      errors
                        .username
                        ?.message
                    }
                  />

                  <Input
                    label="Password"
                    type="password"
                    placeholder="*******"
                    {...register(
                      'password'
                    )}
                    error={
                      errors
                        .password
                        ?.message
                    }
                  />

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting
                    }
                    className="w-full rounded-md bg-blue-600 py-2 text-white font-medium
                   hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    Criar
                    conta
                  </Button>
                </form>
                <div className="flex justify-center gap-0.5 mt-4">
                  <Typography variant="body2">
                    Are you
                    already
                    registered?
                  </Typography>
                  <a href="/login">
                    <Typography
                      variant="body2"
                      className="hover:underline hover:text-red-800 cursor-pointer"
                    >
                      Login
                      here
                    </Typography>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
