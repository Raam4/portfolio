package com.raama.portfolio.controller;

import com.raama.portfolio.model.Persona;
import com.raama.portfolio.model.Ubicacion;
import com.raama.portfolio.service.IPersonaService;
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
public class PersonaController {
    @Autowired
    private IPersonaService interPer;
    
    @GetMapping("persona/traer")
    public List<Persona> getPersona(){
        return interPer.getPersona();
    }
    
    @PostMapping("persona/crear")
    public String createPersona(@RequestBody Persona per){
        interPer.savePersona(per);
        return "Persona creada";
    }
    
    @DeleteMapping("persona/borrar/{id}")
    public String deletePersona(@PathVariable int id){
        interPer.deletePersona(id);
        return "Persona borrada";
    }
    
    @PutMapping("persona/editar/{id}")
    public Persona editarPersona(@PathVariable int id,
                                 @RequestParam("nombre") String nombre,
                                 @RequestParam("apellido") String apellido,
                                 @RequestParam("edad") int edad,
                                 @RequestParam("telefono") String telefono,
                                 @RequestParam("titulo") String titulo,
                                 @RequestParam("resumen") String resumen,
                                 @RequestParam("ubicacion") Ubicacion ubicacion){
        Persona per = interPer.findPersona(id);
        per.setNombre(nombre);
        per.setApellido(apellido);
        per.setEdad(edad);
        per.setTelefono(telefono);
        per.setTitulo(titulo);
        per.setResumen(resumen);
        per.setUbicacion(ubicacion);
        interPer.savePersona(per);
        return per;
    }
}