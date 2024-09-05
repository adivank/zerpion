import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { email, password, name, lastname, phone } = createUserDto;
    const saltRounds = 10;
    let hashedPass = '';
    const self = this;

    const exists = await this.userRepository.exists({where: { email }});

    if(exists) throw new ConflictException('User already exists');

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) console.log(err);

        bcrypt.hash(password, salt, function(err, hash) {
          if(err) console.error(err);

          hashedPass = hash;
          return self.userRepository.save({email, password: hashedPass, name, lastname, phone, nickname: email.substring(0, email.indexOf("@"))})
        })
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(email: string) {
    return await this.userRepository.findBy({email});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
