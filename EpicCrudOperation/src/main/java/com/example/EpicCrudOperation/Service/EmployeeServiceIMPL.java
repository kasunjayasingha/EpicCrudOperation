package com.example.EpicCrudOperation.Service;

import com.example.EpicCrudOperation.DTO.EmployeeDTO;
import com.example.EpicCrudOperation.DTO.EmployeeSaveDTO;
import com.example.EpicCrudOperation.DTO.EmployeeUpdateDTO;
import com.example.EpicCrudOperation.Entity.Employee;
import com.example.EpicCrudOperation.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceIMPL implements EmployeeService {

    @Autowired
   private EmployeeRepo employeeRepo;
    @Autowired
    public EmployeeServiceIMPL(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    @Override
    public String addEmployee(EmployeeSaveDTO employeeSaveDTO) {
        Employee employee = new Employee(
                employeeSaveDTO.getEmployeeName(),
                employeeSaveDTO.getEmployeeAddress(),
                employeeSaveDTO.getMobileNumber()
        );

        employeeRepo.save(employee);
        return employee.getEmployeeName() + " added successfully";
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> getAllEmployee = employeeRepo.findAll();
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();

        for (Employee employee : getAllEmployee) {
            EmployeeDTO employeeDTO = new EmployeeDTO(
                    employee.getEmployeeId(),
                    employee.getEmployeeName(),
                    employee.getEmployeeAddress(),
                    employee.getMobileNumber()
            );
            employeeDTOList.add(employeeDTO);
        }
        return employeeDTOList;
    }

    @Override
    public String updateEmployee(EmployeeUpdateDTO employeeUpdateDTO) {

        if(employeeRepo.existsById(employeeUpdateDTO.getEmployeeId())){
            Employee employee = employeeRepo.getById(employeeUpdateDTO.getEmployeeId());
            employee.setEmployeeName(employeeUpdateDTO.getEmployeeName());
            employee.setEmployeeAddress(employeeUpdateDTO.getEmployeeAddress());
            employee.setMobileNumber(employeeUpdateDTO.getMobileNumber());
            employeeRepo.save(employee);
            return employee.getEmployeeName() + " updated successfully";
        }
        else{
            return "Employee not found";
        }


    }

//    @Override
//    public boolean deleteEmployee(int id) {
//        if(employeeRepo.existsById(id)){
//
//            employeeRepo.deleteById(id);
//            return true;
//        }
//        else{
//            return false;
//        }
//
//    }

    @Override
    public String deleteEmployee(int id) {
        if(employeeRepo.existsById(id)){
            Employee employee = employeeRepo.getById(id);
            employeeRepo.delete(employee);
            return employee.getEmployeeName() + " deleted successfully";
        }
        else{
            return "Employee not found";
        }
    }
}

