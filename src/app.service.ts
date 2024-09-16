import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { SearchUserDto } from './dtos/search.user.dto';
import { config } from 'dotenv';
config()


@Injectable()
export class AppService implements OnModuleInit {
  private users: SearchUserDto[];

  async onModuleInit() {
    const filePath = process.env.USERS_FILE_NAME;

    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${filePath} does not exist.`);
    }

    const rawData = fs.readFileSync(process.env.USERS_FILE_NAME);
    
    this.users = JSON.parse(rawData.toString());
  }

  searchUsersByEmail(userEmail: string) {
    return this.users.filter(user => user.email.includes(userEmail));
  }

  searchUsersByEmailAndNumber(userEmail: string, number: string) {
    const rawNumber = number.replace(/-/g, '');
    return this.users.filter(user => user.email.includes(userEmail) && user.number === rawNumber);
  }


}
