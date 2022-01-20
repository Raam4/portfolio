package com.raama.portfolio.controller;

import com.raama.portfolio.model.Experiencia;
import com.raama.portfolio.model.Persona;
import com.raama.portfolio.model.Institucion;
import com.raama.portfolio.service.IExperienciaService;
import java.util.Calendar;
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
public class ExperienciaController {
    @Autowired
    private IExperienciaService interExp;
    
    @GetMapping("experiencia/traer")
    public List<Experiencia> getExperiencia(){
        return interExp.getExperiencia();
    }
    
    @PostMapping("experiencia/crear")
    public String createExperiencia(@RequestBody Experiencia exp){
        interExp.saveExperiencia(exp);
        return "Experiencia creada";
    }
    
    @DeleteMapping("experiencia/borrar/{id}")
    public String deleteExperiencia(@PathVariable int id){
        interExp.deleteExperiencia(id);
        return "Experiencia borrada";
    }
    
    @PutMapping("experiencia/editar/{id}")
    public Experiencia editarExperiencia(@PathVariable int id,
                                 @RequestParam("titulo") String titulo,
                                 @RequestParam("descripcion") String descripcion,
                                 @RequestParam("fecha_inicio") Calendar fecha_inicio,
                                 @RequestParam("fecha_fin") Calendar fecha_fin,
                                 @RequestParam("institucion") Institucion institucion,
                                 @RequestParam("persona") Persona persona){
        Experiencia exp = interExp.findExperiencia(id);
        exp.setTitulo(titulo);
        exp.setDescripcion(descripcion);
        exp.setFecha_inicio(fecha_inicio);
        exp.setFecha_fin(fecha_fin);
        exp.setInstitucion(institucion);
        exp.setPersona(persona);
        interExp.saveExperiencia(exp);
        return exp;
    }
}