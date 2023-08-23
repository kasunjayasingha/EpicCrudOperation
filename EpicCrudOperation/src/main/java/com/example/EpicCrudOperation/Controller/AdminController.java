package com.example.EpicCrudOperation.Controller;

import com.example.EpicCrudOperation.DTO.*;
import com.example.EpicCrudOperation.Service.AdminService;
import com.example.EpicCrudOperation.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/admins")
public class AdminController {
    private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {

        this.adminService = adminService;
    }

    @PostMapping("/create")
    public String saveAdmin(@RequestBody AdminSaveDTO adminSaveDTO){
        String id = adminService.addAdmin(adminSaveDTO);
        return id;
    }

    //    View all admins
    @GetMapping("/getAllAdmins")
    public List<AdminDTO> getAllAdmins(){
        List<AdminDTO> allAdmins = adminService.getAllAdmins();
        return allAdmins;
    }

    //    Update employee
    @PutMapping("/updateAdmins")
    public String updateAdmin(@RequestBody AdminUpdateDTO adminUpdateDTO){
        String id = adminService.updateAdmin(adminUpdateDTO);
        return id;
    }

    //    Delete employee
    @DeleteMapping("/deleteAdmin/{id}")
    public String deleteAdmin(@PathVariable int id){
        String adminId = adminService.deleteAdmin(id);
        return adminId;
    }
}
