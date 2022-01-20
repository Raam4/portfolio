package com.raama.portfolio.controller;

import com.raama.portfolio.model.Image;
import com.raama.portfolio.model.Proyecto;
import com.raama.portfolio.service.IImageService;
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
public class ImageController {
    @Autowired
    private IImageService interImg;
    
    @GetMapping("image/traer")
    public List<Image> getImage(){
        return interImg.getImage();
    }
    
    @PostMapping("image/crear")
    public String createImage(@RequestBody Image img){
        interImg.saveImage(img);
        return "Imagen creada";
    }
    
    @DeleteMapping("image/borrar/{id}")
    public String deleteImage(@PathVariable int id){
        interImg.deleteImage(id);
        return "Imagen borrada";
    }
    
    @PutMapping("image/editar/{id}")
    public Image editarImage(@PathVariable int id,
                             @RequestParam("nombre") String nombre,
                             @RequestParam("ruta") String ruta,
                             @RequestParam("proyecto") Proyecto proyecto){
        Image img = interImg.findImage(id);
        img.setNombre(nombre);
        img.setRuta(ruta);
        img.setProyecto(proyecto);
        interImg.saveImage(img);
        return img;
    }
}