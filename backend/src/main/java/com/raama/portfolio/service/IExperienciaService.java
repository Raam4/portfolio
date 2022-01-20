package com.raama.portfolio.service;

import com.raama.portfolio.model.Experiencia;
import java.util.List;

public interface IExperienciaService {
    
    public List<Experiencia> getExperiencia();
    
    public void saveExperiencia(Experiencia exp);
    
    public void deleteExperiencia(int id);
    
    public Experiencia findExperiencia(int id);
}