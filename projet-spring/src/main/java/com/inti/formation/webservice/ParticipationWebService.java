package com.inti.formation.webservice;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.inti.formation.entities.ParticipationEntity;
import com.inti.formation.service.IParticipationService;

@RestController
@RequestMapping("/apiParticipation")
@CrossOrigin("*")
public class ParticipationWebService {
	
	@Autowired
	private IParticipationService serv;
	
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ParticipationEntity save(@RequestBody ParticipationEntity e) {
		return serv.save(e);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.PUT)
	public void update(@RequestBody ParticipationEntity e) {
		serv.update(e);
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable long id) {
		serv.delete(id);
	}
	
	@RequestMapping(value="/find/{id}", method=RequestMethod.GET)
	public ParticipationEntity findById(@PathVariable long id) {
		return serv.findById(id);
	}
	
	@RequestMapping(value="/findall", method=RequestMethod.GET)
	public List<ParticipationEntity> findAll(){
		return serv.findAll();
	}
	
	
	
}
