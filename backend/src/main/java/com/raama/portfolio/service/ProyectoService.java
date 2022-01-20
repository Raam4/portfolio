package com.raama.portfolio.service;

import com.raama.portfolio.model.Proyecto;
import com.raama.portfolio.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService{
    @Autowired
    private ProyectoRepository proRepo;

    @Override
    public List<Proyecto> getProyecto() {
        List<Proyecto> listaPro = proRepo.findAll();
        return listaPro;
    }

    @Override
    public void saveProyecto(Proyecto pro) {
        proRepo.save(pro);
    }

    @Override
    public void deleteProyecto(int id) {
        proRepo.deleteById(id);
    }

    @Override
    public Proyecto findProyecto(int id) {
        Proyecto pro = proRepo.findById(id).orElse(null);
        return pro;
    }
}