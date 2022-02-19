package com.raama.portfolio.seguridad.service;

import com.raama.portfolio.seguridad.entity.Rol;
import com.raama.portfolio.seguridad.enums.RolNombre;
import com.raama.portfolio.seguridad.repository.RolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    RolRepository rolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return rolRepository.findByRolNombre(rolNombre);
    }
    
    public void save(Rol rol){
        rolRepository.save(rol);
    }
}
