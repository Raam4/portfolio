package com.raama.portfolio.controller;

import com.raama.portfolio.model.Institucion;
import com.raama.portfolio.model.Image;
import com.raama.portfolio.model.Ubicacion;
import com.raama.portfolio.service.IInstitucionService;
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
public class InstitucionController {
    @Autowired
    private IInstitucionService interInst;
    
    @GetMapping("institucion/traer")
    public List<Institucion> getInstitucion(){
        return interInst.getInstitucion();
    }
    
    @PostMapping("institucion/crear")
    public String createInstitucion(@RequestBody Institucion inst){
        interInst.saveInstitucion(inst);
        return "Institucion creada";
    }
    
    @DeleteMapping("institucion/borrar/{id}")
    public String deleteInstitucion(@PathVariable int id){
        interInst.deleteInstitucion(id);
        return "Institucion borrada";
    }
    
    @PutMapping("institucion/editar/{id}")
    public Institucion editarInstitucion(@PathVariable int id,
                             @RequestParam("nombre") String nombre,
                             @RequestParam("image") Image image,
                             @RequestParam("ubicacion") Ubicacion ubicacion){
        Institucion inst = interInst.findInstitucion(id);
        inst.setNombre(nombre);
        inst.setImage(image);
        inst.setUbicacion(ubicacion);
        interInst.saveInstitucion(inst);
        return inst;
    }
}