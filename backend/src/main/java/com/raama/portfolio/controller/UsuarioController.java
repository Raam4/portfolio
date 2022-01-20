package com.raama.portfolio.controller;

import com.raama.portfolio.model.Usuario;
import com.raama.portfolio.service.IUsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {
    @Autowired
    private IUsuarioService interUser;
    
    @GetMapping("usuario/traer")
    public List<Usuario> getUsuario(){
        return interUser.getUsuario();
    }
    
    @PostMapping("usuario/crear")
    public String createUsuario(@RequestBody Usuario user){
        interUser.saveUsuario(user);
        return "Usuario creada";
    }
    
    @DeleteMapping("usuario/borrar/{id}")
    public String deleteUsuario(@PathVariable int id){
        interUser.deleteUsuario(id);
        return "Usuario borrada";
    }
    
    @PutMapping("usuario/editar/{id}")
    public Usuario editarUsuario(@PathVariable int id,
                                 @RequestParam("username") String username,
                                 @RequestParam("password") String password){
        Usuario user = interUser.findUsuario(id);
        user.setUsername(username);
        user.setPassword(password);
        interUser.saveUsuario(user);
        return user;
    }
}