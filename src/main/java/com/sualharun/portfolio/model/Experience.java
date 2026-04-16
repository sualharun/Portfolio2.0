package com.sualharun.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "experiences")
public class Experience {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ordering;
    private String role;
    private String company;
    private String location;
    private String dateRange;
    private String status; // e.g. "Incoming", "Completed", "Selective Program"
    private Boolean featured;

    @Column(length = 3000)
    private String description;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Integer getOrdering() { return ordering; }
    public void setOrdering(Integer ordering) { this.ordering = ordering; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDateRange() { return dateRange; }
    public void setDateRange(String dateRange) { this.dateRange = dateRange; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Boolean getFeatured() { return featured; }
    public void setFeatured(Boolean featured) { this.featured = featured; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
