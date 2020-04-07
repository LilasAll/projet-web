package com.inti.formation.webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.inti.formation.entities.UserEntity;
import com.inti.formation.service.IUserService;

@RestController
@RequestMapping("/apiUser")
@CrossOrigin("*")
public class UserWebService {
	
	@Autowired
	IUserService serv;
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public UserEntity add(@RequestBody UserEntity u) {
		return serv.save(u);
	}
	
	@RequestMapping(value="/update", method=RequestMethod.PUT)
	public void update(@RequestBody UserEntity u) {
		serv.update(u);
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable long id) {
		serv.delete(id);
	}
	
	@RequestMapping(value="/find/{id}", method=RequestMethod.GET)
	public UserEntity findById(@PathVariable long id) {
		return serv.findById(id);
	}
	
	@RequestMapping(value="/findAll", method=RequestMethod.GET)
	public List<UserEntity> findAll(){
		return serv.findAll();
	}

}
