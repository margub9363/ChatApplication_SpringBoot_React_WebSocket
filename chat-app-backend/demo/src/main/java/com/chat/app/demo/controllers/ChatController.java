package com.chat.app.demo.controllers;

import com.chat.app.demo.entities.Message;
import com.chat.app.demo.entities.Room;
import com.chat.app.demo.payload.MessageRequest;
import com.chat.app.demo.repositories.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@CrossOrigin("http://localhost:3000")
public class ChatController {

    private RoomRepository roomRepository;

    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // for sending and receiving messages
    @MessageMapping("/sendMessage/{roomId}") //  /app/sendMessage/roomId
    @SendTo("/topic/room/{roomId}") //subscribe
    public Message sendMessage(@DestinationVariable String roomId,
                               @RequestBody MessageRequest messageRequest) {
        Room room = roomRepository.findByRoomId(messageRequest.getRoomId());
        Message message = new Message();
        message.setContent(messageRequest.getContent());
        message.setSender(messageRequest.getSender());
        message.setTimeStamps(LocalDateTime.now());

        if (room != null) {
            room.getMessages().add(message);
            roomRepository.save(room);
        } else {
            throw new RuntimeException("room not found");
        }

        return message;
    }
}
