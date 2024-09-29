import { users } from './../moks/index';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UserService {

    getAllUsers(){
        return users;
    }

    getUserById(id: string){
        const userId = users.find(user => user.id_key === id);
        if (userId){
            return userId;
        }
        else {
            return `no one get user by id: ${id}`;
        }

    }

    getUserByIndex(index: number){
        const userIndex = users.find(user => user.index === index);
        if (userIndex){
            return userIndex;
        }
        else {
            return `no one get user by index: ${index}`;
        }

    }

    deleteUserByIndex(index: number){
        const userIndex = users.find(user => user.index === index);
        if (userIndex){
            users.splice(userIndex.index, 1);
            return users;
        }
        else {
            return `no one deleted user by index: ${index}`;
        }
    }

    createUser(userDto: UserDto){
        users.push(userDto);
        return `new list users: ${users.map(user => JSON.stringify(user)).join(', ')}`;
    }

    toggleDone(index: number, newAge: number){
        const userIndex = users.find(user => user.index === index);
        if (userIndex){
            userIndex.age = newAge;
            return userIndex;
        }
        else {
            return `no one patch user by index: ${index}`;
        }
    }
    

}
