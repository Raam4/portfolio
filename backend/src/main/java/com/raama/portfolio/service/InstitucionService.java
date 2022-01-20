package com.raama.portfolio.service;

import com.raama.portfolio.model.Institucion;
import com.raama.portfolio.repository.InstitucionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitucionService implements IInstitucionService{
    @Autowired
    private InstitucionRepository instRepo;

    @Override
    public List<Institucion> getInstitucion() {
        List<Institucion> listaInst = instRepo.findAll();
        return listaInst;
    }

    @Override
    public void saveInstitucion(Institucion inst) {
        instRepo.save(inst);
    }

    @Override
    public void deleteInstitucion(int id) {
        instRepo.deleteById(id);
    }

    @Override
    public Institucion findInstitucion(int id) {
        Institucion inst = instRepo.findById(id).orElse(null);
        return inst;
    }
}