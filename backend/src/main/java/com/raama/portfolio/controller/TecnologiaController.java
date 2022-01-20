package com.raama.portfolio.controller;

import com.raama.portfolio.model.Tecnologia;
import com.raama.portfolio.model.Image;
import com.raama.portfolio.model.Persona;
import com.raama.portfolio.service.ITecnologiaService;
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
public class TecnologiaController {
    @Autowired
    private ITecnologiaService interTec;
    
    @GetMapping("tecnologia/traer")
    public List<Tecnologia> getTecnologia(){
        return interTec.getTecnologia();
    }
    
    @PostMapping("tecnologia/crear")
    public String createTecnologia(@RequestBody Tecnologia tec){
        interTec.saveTecnologia(tec);
        return "Tecnologia creada";
    }
    
    @DeleteMapping("tecnologia/borrar/{id}")
    public String deleteTecnologia(@PathVariable int id){
        interTec.deleteTecnologia(id);
        return "Tecnologia borrada";
    }
    
    @PutMapping("tecnologia/editar/{id}")
    public Tecnologia editarTecnologia(@PathVariable int id,
                             @RequestParam("nombre") String nombre,
                             @RequestParam("descripcion") String descripcion,
                             @RequestParam("image") Image image,
                             @RequestParam("persona") Persona persona){
        Tecnologia tec = interTec.findTecnologia(id);
        tec.setNombre(nombre);
        tec.setDescripcion(descripcion);
        tec.setImage(image);
        tec.setPersona(persona);
        interTec.saveTecnologia(tec);
        return tec;
    }
}