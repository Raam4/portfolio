package com.raama.portfolio.service;

import com.raama.portfolio.model.Usuario;
import com.raama.portfolio.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService{
    @Autowired
    private UsuarioRepository userRepo;

    @Override
    public List<Usuario> getUsuario() {
        List<Usuario> listaUser = userRepo.findAll();
        return listaUser;
    }

    @Override
    public void saveUsuario(Usuario user) {
        userRepo.save(user);
    }

    @Override
    public void deleteUsuario(int id) {
        userRepo.deleteById(id);
    }

    @Override
    public Usuario findUsuario(int id) {
        Usuario user = userRepo.findById(id).orElse(null);
        return user;
    }
}