package com.raama.portfolio.service;

import com.raama.portfolio.model.Skill;
import java.util.List;

public interface ISkillService {
    
    public List<Skill> getSkill();
    
    public void saveSkill(Skill skill);
    
    public void deleteSkill(int id);
    
    public Skill findSkill(int id);
}