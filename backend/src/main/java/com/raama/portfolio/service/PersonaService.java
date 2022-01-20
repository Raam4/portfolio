package com.raama.portfolio.service;

import com.raama.portfolio.model.Persona;
import com.raama.portfolio.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService{
    @Autowired
    private PersonaRepository perRepo;

    @Override
    public List<Persona> getPersona() {
        List<Persona> listaPer = perRepo.findAll();
        return listaPer;
    }

    @Override
    public void savePersona(Persona per) {
        perRepo.save(per);
    }

    @Override
    public void deletePersona(int id) {
        perRepo.deleteById(id);
    }

    @Override
    public Persona findPersona(int id) {
        Persona per = perRepo.findById(id).orElse(null);
        return per;
    }
}
