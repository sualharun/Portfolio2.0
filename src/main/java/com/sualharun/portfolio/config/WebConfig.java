package com.sualharun.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOriginPatterns(
                    "http://localhost:*",         // Local dev/prod ports
                    "https://*.vercel.app",       // Vercel preview & production
                    "https://sualharun.com",      // Custom domain
                    "https://www.sualharun.com"   // Custom domain with www
                )
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowCredentials(true);
    }
}
