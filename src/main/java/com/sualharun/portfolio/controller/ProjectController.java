package com.sualharun.portfolio.controller;

import com.sualharun.portfolio.model.Project;
import com.sualharun.portfolio.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectRepository repo;
    public ProjectController(ProjectRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Project> all() { return repo.findAllByOrderByOrderingAsc(); }
}
