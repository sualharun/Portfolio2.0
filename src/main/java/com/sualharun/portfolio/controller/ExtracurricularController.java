package com.sualharun.portfolio.controller;

import com.sualharun.portfolio.model.Extracurricular;
import com.sualharun.portfolio.repository.ExtracurricularRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/extracurriculars")
public class ExtracurricularController {
    private final ExtracurricularRepository repo;
    public ExtracurricularController(ExtracurricularRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Extracurricular> all() { return repo.findAllByOrderByOrderingAsc(); }
}
