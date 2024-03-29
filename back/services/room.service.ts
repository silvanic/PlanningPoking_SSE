import { Room } from "../models/Room.ts";
import { User, Vote } from "../models/type.ts";

export class RoomService{

    rooms: Map<string, Room>
    
    constructor(){
        this.rooms= new Map();
    }

    set(room: Room){
        this.rooms.set(room.id, room);
    }

    get(id: string){
        return this.rooms.get(id);
    }

    creer(name: string, suit: string){
        const room = new Room(name, suit.split(';'));
        this.set(room);
        return room;
    }

    updateInfo(roomId: string, description: string, url: string){
        const room = this.get(roomId);
        if(room){
            room.update(description, url);
            this.set(room);
        }
    }

    updateStatus(roomId: string){
        const room = this.get(roomId);
        if(room){
            room.updateStatus();
            this.set(room);
        }
    }

    lancerVote(roomId: string){
        const room = this.get(roomId);
        if(room){
            room.lancerVote();
            this.set(room);
        }
    }

    addUser(roomId: string, user: User){
        const room = this.get(roomId);
        let result = null;
        if(room){
            result = room.addUser(user);
            this.set(room);
        }
        return result;
    }
    
    setVote(roomId: string, vote: Vote){
        const room = this.get(roomId);
        if(room){
            room.setVote(vote);
            this.set(room);
        }
    }

    removeRoom(roomId: string){
        this.rooms.delete(roomId);
    }

    removeUser(roomId: string, userId: string){
        const room = this.get(roomId);
        if(room){
            room.removeUser(userId);
            this.set(room);
        }
    }
}