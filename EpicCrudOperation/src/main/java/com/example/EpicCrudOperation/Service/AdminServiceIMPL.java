package com.example.EpicCrudOperation.Service;

import com.example.EpicCrudOperation.DTO.*;
import com.example.EpicCrudOperation.Entity.Admin;
import com.example.EpicCrudOperation.Entity.Employee;
import com.example.EpicCrudOperation.Repo.AdminRepo;
import com.example.EpicCrudOperation.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class AdminServiceIMPL implements AdminService {
    @Autowired
    private AdminRepo adminRepo;


    @Autowired
    public AdminServiceIMPL(AdminRepo adminRepo) {

        this.adminRepo = adminRepo;
    }

//    Add Admins
    @Override
    public String addAdmin(AdminSaveDTO adminSaveDTO) {
        Admin admin = new Admin(
                adminSaveDTO.getAdminName(),
                adminSaveDTO.getAdminEmail(),
                adminSaveDTO.getAdminPassword(),
                adminSaveDTO.getAdminType()



        );
        adminRepo.save(admin);
        return admin.getAdminName() + " added successfully";
    }

//    get admins
    @Override
    public List<AdminDTO> getAllAdmins() {
        List<Admin> getAllAdmin = adminRepo.findAll();
        List<AdminDTO> adminDTOList = new ArrayList<>();

        for (Admin admin : getAllAdmin) {
            AdminDTO adminDTO = new AdminDTO(
                    admin.getAdminId(),
                    admin.getAdminName(),
                    admin.getAdminEmail(),
                    admin.getAdminPassword(),
                    admin.getAdminType()

            );
            adminDTOList.add(adminDTO);
        }
        return adminDTOList;
    }

//    Update admins
    @Override
    public String updateAdmin(AdminUpdateDTO adminUpdateDTO) {
        if(adminRepo.existsById(adminUpdateDTO.getAdminId())){
            Admin admin = adminRepo.getById(adminUpdateDTO.getAdminId());
//            employee.setEmployeeName(employeeUpdateDTO.getEmployeeName());
            admin.setAdminEmail(adminUpdateDTO.getAdminEmail());
            admin.setAdminName(adminUpdateDTO.getAdminName());
            admin.setAdminPassword(adminUpdateDTO.getAdminPassword());
            admin.setAdminType(adminUpdateDTO.getAdminType());
            adminRepo.save(admin);
            return admin.getAdminName() + " updated successfully";
        }
        else{
            return "Admin not found";
        }
    }

    @Override
    public String deleteAdmin(int id) {
        if(adminRepo.existsById(id)){
            Admin admin = adminRepo.getById(id);
            adminRepo.delete(admin);
            return admin.getAdminName() + " deleted successfully";
        }
        else{
            return "Admin not found";
        }
    }
}
