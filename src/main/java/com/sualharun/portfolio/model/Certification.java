package com.sualharun.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "certifications")
public class Certification {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ordering;
    private String name;
    private String issuer;
    private String brand; // "aws" or "azure"
    private String shortCode; // "AWS" / "AZ"

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Integer getOrdering() { return ordering; }
    public void setOrdering(Integer ordering) { this.ordering = ordering; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    public String getShortCode() { return shortCode; }
    public void setShortCode(String shortCode) { this.shortCode = shortCode; }
}
