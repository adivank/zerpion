import { IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: '' })
  name: string;
  @Column({ default: '' })
  lastname: string;
  @IsNotEmpty()
  @Column()
  nickname: string;
  @IsNotEmpty()
  @Column()
  email: string;
  @IsNotEmpty()
  @Column()
  password: string;
}
