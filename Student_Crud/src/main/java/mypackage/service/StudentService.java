package mypackage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mypackage.Repository.StudentRepository;
import mypackage.model.Student;

@Service
public class StudentService {
	@Autowired
	StudentRepository studrepo;
	
	public Student AddorUpdateStudent(Student st) {
		return studrepo.save(st);	
	}

	public List<Student>GetStudents() {	
		List<Student> lst = new ArrayList<Student>();
		for(Student s:studrepo.findAll()) {
			Student st =  new Student(s.getStudent_id(), s.getStudent_name(),s.getStudent_code(),s.getEmail_address(),s.getMobile_number(),s.getGender(),s.getLocal_address());
			lst.add(st);
		}
		return lst;	
	}
	
	public Student GetStudentbyid(int id) {
		return studrepo.findById(id).get();
	}

	public Student DeleteStudent(int id) {
		Student st =GetStudentbyid(id);
		studrepo.delete(st);
		return st;
	}
}
