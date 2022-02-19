package com.raama.portfolio.seguridad.service;

import com.raama.portfolio.seguridad.entity.Usuario;
import com.raama.portfolio.seguridad.repository.UsuarioRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;
    
    public Optional<Usuario> getByUsername(String username){
        return usuarioRepository.findByUsername(username);
    }
    
    public boolean existsByUsername(String username){
        return usuarioRepository.existsByUsername(username);
    }
    
    public boolean existsByEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }
    
    public void save(Usuario usuario){
        usuarioRepository.save(usuario);
    }
}
