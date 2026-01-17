package com.chat.app.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

//@Getter
//@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message {

    private String sender;
    private String content;
    private LocalDateTime timeStamps = LocalDateTime.now();

    public Message(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTimeStamps() {
        return timeStamps;
    }

    public void setTimeStamps(LocalDateTime timeStamps) {
        this.timeStamps = timeStamps;
    }
}
