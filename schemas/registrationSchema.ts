import { z } from 'zod'
export const emailAndPasswordSchema = z
  .object({
    email: z.string().email('O e-mail é obrigatorio!'),
    password: z.string().min(4, 'A senha deve conter no minimo 4 caracteres.')
  })
  .required()

export type TEmailAndPasswordData = z.infer<typeof emailAndPasswordSchema>
