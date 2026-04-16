package com.sualharun.portfolio.controller;

import com.sualharun.portfolio.model.Experience;
import com.sualharun.portfolio.repository.ExperienceRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/experience")
public class ExperienceController {
    private final ExperienceRepository repo;
    public ExperienceController(ExperienceRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Experience> all() { return repo.findAllByOrderByOrderingAsc(); }
}
