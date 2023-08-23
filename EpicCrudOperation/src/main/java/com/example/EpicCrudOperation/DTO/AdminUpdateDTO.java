package com.example.EpicCrudOperation.DTO;

public class AdminUpdateDTO {
    private int adminId;
    private String adminName;
    private String adminEmail;
    private String adminPassword;
    private String adminType;

    public AdminUpdateDTO(int adminId, String adminName, String adminEmail, String adminPassword, String adminType) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
        this.adminType = adminType;
    }

    public AdminUpdateDTO() {
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public String getAdminType() {
        return adminType;
    }

    public void setAdminType(String adminType) {
        this.adminType = adminType;
    }

    @Override
    public String toString() {
        return "AdminDTO{" +
                "adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", adminType='" + adminType + '\'' +
                '}';
    }
}
