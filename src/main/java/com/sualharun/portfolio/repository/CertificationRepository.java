package com.sualharun.portfolio.repository;

import com.sualharun.portfolio.model.Certification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CertificationRepository extends JpaRepository<Certification, Long> {
    List<Certification> findAllByOrderByOrderingAsc();
}
