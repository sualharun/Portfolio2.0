package com.sualharun.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "extracurriculars")
public class Extracurricular {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ordering;
    private String title;

    @Column(length = 2000)
    private String description;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Integer getOrdering() { return ordering; }
    public void setOrdering(Integer ordering) { this.ordering = ordering; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
