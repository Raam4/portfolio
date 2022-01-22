package com.raama.portfolio.service;

import com.raama.portfolio.model.Persona;
import java.util.List;

public interface IPersonaService {
    
    public List<Persona> getPersona();
    
    public void savePersona(Persona per);
    
    public void deletePersona(int id);
    
    public Persona findPersona(int id);
}