package com.sualharun.portfolio.controller;

import com.sualharun.portfolio.model.ContactMessage;
import com.sualharun.portfolio.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactMessageRepository repo;
    public ContactController(ContactMessageRepository repo) { this.repo = repo; }

    @PostMapping
    public ResponseEntity<?> submit(@Valid @RequestBody ContactMessage msg) {
        ContactMessage saved = repo.save(msg);
        return ResponseEntity.ok(Map.of(
                "status", "ok",
                "id", saved.getId(),
                "message", "Thanks — I'll get back to you soon."
        ));
    }
}
