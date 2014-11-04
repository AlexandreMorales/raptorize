package br.com.aceleradora.RegistroLivre.model;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import br.com.caelum.vraptor.ioc.ApplicationScoped;
import br.com.caelum.vraptor.ioc.Component;
import br.com.caelum.vraptor.ioc.ComponentFactory;
import br.com.caelum.vraptor.ioc.RequestScoped;


@Component
//@RequestScoped
//@ApplicationScoped
public class SessionCreator implements ComponentFactory<Session>{

	private final SessionFactory factory;
	private Session session;
	
	public SessionCreator(SessionFactory factory) {
		this.factory = factory;
		create();
	}
	
	@Override
	public Session getInstance() {
		return session;
	}
	
//	@PostConstruct
	public void create(){
		this.session = factory.openSession();
	}

	@PreDestroy
	public void destroy(){
		this.session.close();
	}
	
}
