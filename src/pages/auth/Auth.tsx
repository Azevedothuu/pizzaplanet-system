import backgroundImage from '@assets/images/auth-bg.jpg';
import { Input } from '@components/input';
import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  loginSchema,
  type LoginFormData,
} from '@schemas/login.schema';
import { Button } from '@components/buttons';
import { Typography } from '@components/typography';

import icon from '@assets/images/PizzaPlanet-icon.png';

export function Auth(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(
      loginSchema
    ),
  });

  function onSubmit(
    data: LoginFormData
  ) {
    console.log(data);
    alert(
      'Login realizado com sucesso!'
    );
  }

  return (
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
        <div className="bg-(--auth-card-bg) p-8 rounded-lg shadow-lg">
          {/* Conteúdo interativo */}
          {/*  */}

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
                  Pizza Planet
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
                  label="Password"
                  placeholder="********"
                  type="password"
                  {...register(
                    'password'
                  )}
                  error={
                    errors
                      .password
                      ?.message
                  }
                />

                <Button type="submit">
                  Entrar
                </Button>
              </form>
              <div className="flex justify-center gap-0.5 mt-4">
                <Typography variant="body2">
                  Don't have
                  an account?
                </Typography>
                <a href="/register">
                  <Typography
                    variant="body2"
                    className="hover:underline hover:text-red-800 cursor-pointer"
                  >
                    Register
                    now.
                  </Typography>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
