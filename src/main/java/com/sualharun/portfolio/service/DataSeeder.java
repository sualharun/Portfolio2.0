package com.sualharun.portfolio.service;

import com.sualharun.portfolio.model.*;
import com.sualharun.portfolio.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProjectRepository projects;
    private final ExperienceRepository experiences;
    private final CertificationRepository certs;
    private final ExtracurricularRepository extras;

    public DataSeeder(ProjectRepository projects,
                      ExperienceRepository experiences,
                      CertificationRepository certs,
                      ExtracurricularRepository extras) {
        this.projects = projects;
        this.experiences = experiences;
        this.certs = certs;
        this.extras = extras;
    }

    @Override
    public void run(String... args) {
        if (certs.count() == 0) seedCerts();
        if (experiences.count() == 0) seedExperience();
        if (projects.count() == 0) seedProjects();
        if (extras.count() == 0) seedExtras();
    }

    private void seedCerts() {
        certs.save(cert(1, "Cloud Practitioner", "Amazon Web Services", "aws", "AWS"));
        certs.save(cert(2, "Solutions Architect – Associate", "Amazon Web Services", "aws", "AWS"));
        certs.save(cert(3, "AZ-104 Administrator Associate", "Microsoft Azure", "azure", "AZ"));
    }

    private void seedExperience() {
        experiences.save(exp(1, "Software Engineering Intern", "Toyota Financial Services",
                "Plano, TX", "May 2026 – Aug 2026", "Incoming", false,
                "Selected to collaborate with the engineering team to architect and scale distributed backend services, optimizing API performance and enhancing system reliability to support high-concurrency financial transactions across enterprise-scale cloud infrastructure."));

        experiences.save(exp(2, "Tech Summit Participant", "Capital One",
                "Plano, TX", "May 2026", "Selective Program", true,
                "Selected for Capital One's highly competitive 5-day Tech Summit, including a hackathon, focused on technical leadership, enterprise engineering, and career development."));

        experiences.save(exp(3, "Software Engineering Intern", "Vantashala",
                "Dallas, TX", "May 2024 – Aug 2024", "Completed", false,
                "• Engineered and integrated scalable RESTful APIs for the \"Recent Orders\" module, reducing dashboard load times by 35%.\n" +
                "• Refactored legacy codebases across 3 repositories using DRY principles, resulting in a 20% decrease in CI/CD pipeline build times.\n" +
                "• Increased database efficiency by 40% using MongoDB index optimization and caching strategies."));
    }

    private void seedProjects() {
        projects.save(proj(1, "Smart Glasses Assistant",
                "Wearable AI assistive system for face and object recognition with spoken feedback and mobile/cloud sync.",
                "Wearable HW,AI/ML,Computer Vision,Cloud Sync,Mobile"));

        projects.save(proj(2, "EchoMap",
                "Takes raw Amboseli field recordings and runs each through a 3-stage DSP pipeline that separates elephant harmonics from mechanical noise, then serves cleaned audio, before/after spectrograms, and recording metrics through a research dashboard.",
                "DSP,Audio Processing,Python,Research Dashboard"));

        projects.save(proj(3, "Cloud Cost Advisor",
                "Enterprise browser extension with Java Spring Boot backend delivering real-time cost recommendations across Azure, AWS, and GCP. Cross-cloud normalization with K-means clustering, Redis caching cutting latency by 40%, and time-series forecasting achieving 25–35% savings.",
                "Java,Spring Boot,Azure,AWS,GCP,Redis,K-means"));

        projects.save(proj(4, "Distributed File Processing Pipeline",
                "Async processing engine with Next.js frontend and ECS Fargate backend. Event-driven distributed system reducing processing time by 80%. Fault-tolerant architecture with DynamoDB-tracked job recovery and 99.9% job completion rate.",
                "Next.js,AWS,ECS Fargate,Terraform,DynamoDB,SQS"));

        projects.save(proj(5, "FocusFlow",
                "Full-stack Pomodoro productivity app with React and Spring Boot, real-time collaborative sessions via WebSocket/STOMP, OAuth2 Google login, activity logging and analytics pipeline optimizing work intervals by 25%.",
                "Spring Boot,React,WebSocket,OAuth2,PostgreSQL,Tailwind"));

        projects.save(proj(6, "Movie Recommender",
                "ML-powered movie recommendation site with Spring Boot backend integrated with Python model using TF-IDF vectorization and cosine similarity on movie descriptions, exposed through REST APIs.",
                "Java,Spring Boot,Python,Data Science"));
    }

    private void seedExtras() {
        extras.save(extra(1, "FIRST Robotics Competition",
                "100+ hours contributed. Designed and fabricated 3 major robot mechanisms in a fast-paced, high-stakes team environment."));
        extras.save(extra(2, "UTD Club Soccer — Vice President",
                "Executive board member managing logistics and operations for a competitive club soccer program. Coordinate travel, scheduling, and events for a roster of 40+ players, collaborating cross-functionally to execute matches and tournaments."));
        extras.save(extra(3, "Pages 4 Ages — Co-Founder",
                "Co-founded a nonprofit improving educational access through book drives and community events. Raised $6,500+ and collected 5,000+ books for local youth and libraries."));
    }

    // helpers
    private Certification cert(int o, String name, String issuer, String brand, String code) {
        Certification c = new Certification();
        c.setOrdering(o); c.setName(name); c.setIssuer(issuer); c.setBrand(brand); c.setShortCode(code);
        return c;
    }
    private Experience exp(int o, String role, String company, String loc, String date, String status, boolean feat, String desc) {
        Experience e = new Experience();
        e.setOrdering(o); e.setRole(role); e.setCompany(company); e.setLocation(loc);
        e.setDateRange(date); e.setStatus(status); e.setFeatured(feat); e.setDescription(desc);
        return e;
    }
    private Project proj(int o, String title, String desc, String tags) {
        Project p = new Project();
        p.setOrdering(o); p.setTitle(title); p.setDescription(desc); p.setTags(tags);
        return p;
    }
    private Extracurricular extra(int o, String title, String desc) {
        Extracurricular x = new Extracurricular();
        x.setOrdering(o); x.setTitle(title); x.setDescription(desc);
        return x;
    }
}
