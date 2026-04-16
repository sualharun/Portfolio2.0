package com.sualharun.portfolio.repository;

import com.sualharun.portfolio.model.Extracurricular;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExtracurricularRepository extends JpaRepository<Extracurricular, Long> {
    List<Extracurricular> findAllByOrderByOrderingAsc();
}
