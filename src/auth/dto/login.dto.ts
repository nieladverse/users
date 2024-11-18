import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class LoginDto {
    @ApiProperty({
      description: 'Correo electrónico del usuario',
      example: 'usuario@ejemplo.com',
      required: true
    })
    @IsNotEmpty({ message: 'El correo electrónico no puede estar vacío' })
    @IsEmail({}, { message: 'Formato de correo electrónico inválido' })
    @MaxLength(100, { message: 'El correo electrónico no puede superar los 100 caracteres' })
    email: string;
  
    @ApiProperty({
      description: 'Contraseña del usuario',
      example: 'Contraseña123!',
      required: true
    })
    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    // @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    // @MaxLength(50, { message: 'La contraseña no puede superar los 50 caracteres' })
    // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    //   message: 'La contraseña debe contener al menos: una letra mayúscula, una minúscula, un número y un carácter especial'
    // })
    password: string;
  }