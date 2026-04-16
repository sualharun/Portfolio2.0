package com.sualharun.portfolio.controller;

import com.sualharun.portfolio.model.Certification;
import com.sualharun.portfolio.repository.CertificationRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/certifications")
public class CertificationController {
    private final CertificationRepository repo;
    public CertificationController(CertificationRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Certification> all() { return repo.findAllByOrderByOrderingAsc(); }
}
