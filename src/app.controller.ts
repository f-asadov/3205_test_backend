import { Controller, Post, Body, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchUserDto } from './dtos/search.user.dto';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('search')
  async search(@Body() searchUserDto:SearchUserDto ) {
    const { email, number } = searchUserDto;

    if (!email)  throw new HttpException('Email is required', HttpStatus.NOT_FOUND);
  
    await this.delay(5000);

    if (number) return this.appService.searchUsersByEmailAndNumber(email, number);
    else return this.appService.searchUsersByEmail(email);
    
  }
  
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
