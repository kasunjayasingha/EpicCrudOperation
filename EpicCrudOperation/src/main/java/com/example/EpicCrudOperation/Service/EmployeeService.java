package com.example.EpicCrudOperation.Service;

import com.example.EpicCrudOperation.DTO.EmployeeDTO;
import com.example.EpicCrudOperation.DTO.EmployeeSaveDTO;
import com.example.EpicCrudOperation.DTO.EmployeeUpdateDTO;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {
    String addEmployee(EmployeeSaveDTO employeeSaveDTO);

    List<EmployeeDTO> getAllEmployee();

    String updateEmployee(EmployeeUpdateDTO employeeUpdateDTO);

    String deleteEmployee(int id);
//    boolean deleteEmployee(int id);
}
