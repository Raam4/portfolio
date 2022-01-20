package com.raama.portfolio.service;

import com.raama.portfolio.model.Tecnologia;
import com.raama.portfolio.repository.TecnologiaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TecnologiaService implements ITecnologiaService{
    @Autowired
    private TecnologiaRepository tecRepo;

    @Override
    public List<Tecnologia> getTecnologia() {
        List<Tecnologia> listaTec = tecRepo.findAll();
        return listaTec;
    }

    @Override
    public void saveTecnologia(Tecnologia tec) {
        tecRepo.save(tec);
    }

    @Override
    public void deleteTecnologia(int id) {
        tecRepo.deleteById(id);
    }

    @Override
    public Tecnologia findTecnologia(int id) {
        Tecnologia tec = tecRepo.findById(id).orElse(null);
        return tec;
    }
}