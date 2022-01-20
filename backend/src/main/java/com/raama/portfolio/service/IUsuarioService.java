package com.raama.portfolio.service;

import com.raama.portfolio.model.Usuario;
import java.util.List;

public interface IUsuarioService {
    
    public List<Usuario> getUsuario();
    
    public void saveUsuario(Usuario user);
    
    public void deleteUsuario(int id);
    
    public Usuario findUsuario(int id);
}