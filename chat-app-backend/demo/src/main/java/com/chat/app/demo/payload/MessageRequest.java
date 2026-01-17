package com.chat.app.demo.payload;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.messaging.handler.annotation.SendTo;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {
    private String content;
    private String sender;
    private String roomId;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

}
