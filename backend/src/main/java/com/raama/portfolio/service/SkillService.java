package com.raama.portfolio.service;

import com.raama.portfolio.model.Skill;
import com.raama.portfolio.repository.SkillRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService implements ISkillService{
    @Autowired
    private SkillRepository skillRepo;

    @Override
    public List<Skill> getSkill() {
        List<Skill> listaSkill = skillRepo.findAll();
        return listaSkill;
    }

    @Override
    public void saveSkill(Skill skill) {
        skillRepo.save(skill);
    }

    @Override
    public void deleteSkill(int id) {
        skillRepo.deleteById(id);
    }

    @Override
    public Skill findSkill(int id) {
        Skill skill = skillRepo.findById(id).orElse(null);
        return skill;
    }
}