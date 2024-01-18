package mypackage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mypackage.model.Student;
import mypackage.service.StudentService;

@RestController
@CrossOrigin(origins="*",allowedHeaders = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE} )
public class StudentController {

	@Autowired
	StudentService sservice;
	
	@GetMapping("api/student")
	public List<Student> GetStduents(){
		return sservice.GetStudents();
	} 
	
	@GetMapping("api/student/{student_id}")
	public Student GetStduents(@PathVariable("student_id") int id){
		return sservice.GetStudentbyid(id);
	} 
	
	@PostMapping("api/student")
	public String AddStudent(@RequestBody Student st){
		sservice.AddorUpdateStudent(st);
		return "Student Added Successfully";
	}
	
	@PutMapping("api/student")
	public String UpdateStudent(@RequestBody Student st){
		sservice.AddorUpdateStudent(st);
		return "Student Updated Successfully";
	}
	
	@DeleteMapping("api/student/{student_id}")
	public String DeleteStduent(@PathVariable("student_id") int id){
		sservice.DeleteStudent(id);
		return "Student Delete Successfully";
	}
}
