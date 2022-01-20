package com.raama.portfolio.controller;

import com.raama.portfolio.model.Skill;
import com.raama.portfolio.model.Persona;
import com.raama.portfolio.service.ISkillService;
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
public class SkillController {
    @Autowired
    private ISkillService interSkill;
    
    @GetMapping("skill/traer")
    public List<Skill> getSkill(){
        return interSkill.getSkill();
    }
    
    @PostMapping("skill/crear")
    public String createSkill(@RequestBody Skill skill){
        interSkill.saveSkill(skill);
        return "Skill creada";
    }
    
    @DeleteMapping("skill/borrar/{id}")
    public String deleteSkill(@PathVariable int id){
        interSkill.deleteSkill(id);
        return "Skill borrada";
    }
    
    @PutMapping("skill/editar/{id}")
    public Skill editarSkill(@PathVariable int id,
                                 @RequestParam("nombre") String nombre,
                                 @RequestParam("descripcion") String descripcion,
                                 @RequestParam("persona") Persona persona){
        Skill skill = interSkill.findSkill(id);
        skill.setNombre(nombre);
        skill.setDescripcion(descripcion);
        skill.setPersona(persona);
        interSkill.saveSkill(skill);
        return skill;
    }
}