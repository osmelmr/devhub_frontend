import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email("debe ser un email valido")
      .max(50, "Máximo 50 caracteres"),

    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(100, "Máximo 100 caracteres"),

    password_confirm: z.string().min(6, "Debes confirmar la contraseña"),

    first_name: z
      .string()
      .max(100, "Máximo 100 caracteres")
      .optional()
      .or(z.literal("")),

    username: z
      .string()
      .max(50, "Máximo 50 caracteres")
      .optional()
      .or(z.literal("")),

    avatar_url: z
      .string()
      .url("Debe ser una URL válida")
      .optional()
      .or(z.literal("")),

    avatar_file: z
      .any()
      .optional()
      .refine(
        (fileList) => {
          if (!fileList) return true;
          const file = fileList[0];
          if (!file) return true;

          const maxSize = 10 * 1024 * 1024;
          if (file.size > maxSize) return false;

          const allowed = ["image/jpeg", "image/png", "image/webp"];
          return allowed.includes(file.type);
        },
        {
          message:
            "Debe ser una imagen válida (JPG, PNG, WEBP) de menos de 10 MB",
        }
      ),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirm"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
