import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório').email('E-mail inválido'),

  username: z.string().min(3, 'O Username deve ter no mínimo 3 caracteres'),

  password: z.string().min(6, 'A Password deve ter no mínimo 6 caracteres'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
