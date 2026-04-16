package com.sualharun.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(
                    "http://localhost:5173",      // Local dev
                    "http://localhost:8080",      // Local production
                    "https://*.vercel.app",       // Vercel preview & production
                    "https://sualharun.com"       // Custom domain (if used)
                )
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowCredentials(true);
    }
}
