package com.example.EpicCrudOperation.Service;

import com.example.EpicCrudOperation.DTO.AdminDTO;
import com.example.EpicCrudOperation.DTO.AdminSaveDTO;
import com.example.EpicCrudOperation.DTO.AdminUpdateDTO;

import java.util.List;

public interface AdminService {
    String addAdmin(AdminSaveDTO adminSaveDTO);

    List<AdminDTO> getAllAdmins();

    String updateAdmin(AdminUpdateDTO adminUpdateDTO);

    String deleteAdmin(int id);
}
