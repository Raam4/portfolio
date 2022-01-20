package com.raama.portfolio.controller;

import com.raama.portfolio.model.Ubicacion;
import com.raama.portfolio.service.IUbicacionService;
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
public class UbicacionController {
    @Autowired
    private IUbicacionService interUbi;
    
    @GetMapping("ubicacion/traer")
    public List<Ubicacion> getUbicacion(){
        return interUbi.getUbicacion();
    }
    
    @PostMapping("ubicacion/crear")
    public String createUbicacion(@RequestBody Ubicacion ubi){
        interUbi.saveUbicacion(ubi);
        return "Ubicacion creada";
    }
    
    @DeleteMapping("ubicacion/borrar/{id}")
    public String deleteUbicacion(@PathVariable int id){
        interUbi.deleteUbicacion(id);
        return "Ubicacion borrada";
    }
    
    @PutMapping("ubicacion/editar/{id}")
    public Ubicacion editarUbicacion(@PathVariable int id,
                                 @RequestParam("ciudad") String ciudad,
                                 @RequestParam("provincia") String provincia,
                                 @RequestParam("pais") String pais){
        Ubicacion ubi = interUbi.findUbicacion(id);
        ubi.setCiudad(ciudad);
        ubi.setProvincia(provincia);
        ubi.setPais(pais);
        interUbi.saveUbicacion(ubi);
        return ubi;
    }
}