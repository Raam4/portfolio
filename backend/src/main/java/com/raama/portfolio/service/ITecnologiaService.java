package com.raama.portfolio.service;

import com.raama.portfolio.model.Tecnologia;
import java.util.List;

public interface ITecnologiaService {
    
    public List<Tecnologia> getTecnologia();
    
    public void saveTecnologia(Tecnologia tec);
    
    public void deleteTecnologia(int id);
    
    public Tecnologia findTecnologia(int id);
}