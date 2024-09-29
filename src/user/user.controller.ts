import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get('all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id : string) {
        return this.userService.getUserById(id);
    }

    @Get('index/:index')
    getUserByIndex(@Param('index') index : string) {
        return this.userService.getUserByIndex(+index);
    }

    @Post('post')
    @UsePipes(new ValidationPipe())
    postUser(@Body() userDto: UserDto){
        return this.userService.createUser(userDto);
    }

    @Delete(':index')
    deleteUserByIndex(@Param('index') index: string){
        return this.userService.deleteUserByIndex(+index);
    }

    @Patch('patch/:index')
    toggleDone(@Param('index') index: string, @Body() body: { newAge: number }){
        return this.userService.toggleDone(+index, body.newAge);
    }
    
}
