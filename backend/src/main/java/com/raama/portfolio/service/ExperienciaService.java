package com.raama.portfolio.service;

import com.raama.portfolio.model.Experiencia;
import com.raama.portfolio.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService implements IExperienciaService{
    @Autowired
    private ExperienciaRepository expRepo;

    @Override
    public List<Experiencia> getExperiencia() {
        List<Experiencia> listaExp = expRepo.findAll();
        return listaExp;
    }

    @Override
    public void saveExperiencia(Experiencia exp) {
        expRepo.save(exp);
    }

    @Override
    public void deleteExperiencia(int id) {
        expRepo.deleteById(id);
    }

    @Override
    public Experiencia findExperiencia(int id) {
        Experiencia exp = expRepo.findById(id).orElse(null);
        return exp;
    }
}