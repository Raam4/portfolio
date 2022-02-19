package com.raama.portfolio.seguridad.repository;

import com.raama.portfolio.seguridad.entity.Rol;
import com.raama.portfolio.seguridad.enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
