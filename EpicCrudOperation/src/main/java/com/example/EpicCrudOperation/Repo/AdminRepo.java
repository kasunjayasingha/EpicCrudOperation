package com.example.EpicCrudOperation.Repo;

import com.example.EpicCrudOperation.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
}
