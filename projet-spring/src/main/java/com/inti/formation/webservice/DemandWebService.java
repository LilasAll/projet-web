package com.inti.formation.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.inti.formation.entities.DemandEntity;
import com.inti.formation.service.IDemandService;

@RestController
@RequestMapping("/apiDemand")
@CrossOrigin("*")
public class DemandWebService {
	
	@Autowired
	private IDemandService serv;
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public DemandEntity add(@RequestBody DemandEntity d) {
		return serv.save(d);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.PUT)
	public void update(@RequestBody DemandEntity d) {
		serv.update(d);
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable long id) {
		serv.delete(id);
	}
	
	@RequestMapping(value="/find/{id}", method=RequestMethod.GET)
	public DemandEntity findById(@PathVariable long id) {
		return serv.findById(id);
	}
	
	@RequestMapping(value="/findAll", method=RequestMethod.GET)
	public List<DemandEntity> findAll(){
		return serv.findAll();
	}
	

}
