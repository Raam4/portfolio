package com.raama.portfolio.controller;

import com.raama.portfolio.model.Proyecto;
import com.raama.portfolio.model.Persona;
import com.raama.portfolio.service.IProyectoService;
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
public class ProyectoController {
    @Autowired
    private IProyectoService interPro;
    
    @GetMapping("proyecto/traer")
    public List<Proyecto> getProyecto(){
        return interPro.getProyecto();
    }
    
    @PostMapping("proyecto/crear")
    public String createProyecto(@RequestBody Proyecto pro){
        interPro.saveProyecto(pro);
        return "Proyecto creado";
    }
    
    @DeleteMapping("proyecto/borrar/{id}")
    public String deleteProyecto(@PathVariable int id){
        interPro.deleteProyecto(id);
        return "Proyecto borrado";
    }
    
    @PutMapping("proyecto/editar/{id}")
    public Proyecto editarProyecto(@PathVariable int id,
                                 @RequestParam("nombre") String nombre,
                                 @RequestParam("descripcion") String descripcion,
                                 @RequestParam("fecha_inicio") Calendar fecha_inicio,
                                 @RequestParam("enlace") String enlace,
                                 @RequestParam("persona") Persona persona){
        Proyecto pro = interPro.findProyecto(id);
        pro.setNombre(nombre);
        pro.setDescripcion(descripcion);
        pro.setFecha_inicio(fecha_inicio);
        pro.setEnlace(enlace);
        pro.setPersona(persona);
        interPro.saveProyecto(pro);
        return pro;
    }
}