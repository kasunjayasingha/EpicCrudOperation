package com.example.EpicCrudOperation.Controller;

import com.example.EpicCrudOperation.DTO.EmployeeDTO;
import com.example.EpicCrudOperation.DTO.EmployeeSaveDTO;
import com.example.EpicCrudOperation.DTO.EmployeeUpdateDTO;
import com.example.EpicCrudOperation.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/create")
    public String saveEmployee(@RequestBody EmployeeSaveDTO employeeSaveDTO){
        String id = employeeService.addEmployee(employeeSaveDTO);
        return id;
    }

//    View all employees
    @GetMapping("/getAllEmployee")
    public List<EmployeeDTO> getAllEmployee(){
        List<EmployeeDTO> allEmployees = employeeService.getAllEmployee();
        return allEmployees;
    }

//    Update employee
    @PutMapping("/updateEmployee")
    public String updateEmployee(@RequestBody EmployeeUpdateDTO employeeUpdateDTO){
        String id = employeeService.updateEmployee(employeeUpdateDTO);
        return id;
    }

//    Delete employee
    @DeleteMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable int id){
        String employeeId = employeeService.deleteEmployee(id);
        return employeeId;
    }

//    @DeleteMapping("/deleteEmployee/{id}")
//    public String deleteEmployee(@PathVariable(value = "id") int id){
//        boolean deleteEmployee = employeeService.deleteEmployee(id);
//        return deleteEmployee + " deleted successfully";
//    }
}
