package com.example.EpicCrudOperation.Entity;

import javax.persistence.*;

@Entity
@Table(name = "admins")
public class Admin {
    @Id
    @Column(name = "admin_id", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int adminId;
    @Column(name = "admin_name", length = 50)
    private String adminName;
    @Column(name = "admin_email", length = 50)
    private String adminEmail;
    @Column(name = "admin_password", length = 10)
    private String adminPassword;
    @Column(name = "admin_type", length = 10)
    private String adminType;

    public Admin(int adminId, String adminName, String adminEmail, String adminPassword, String adminType) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
        this.adminType = adminType;
    }

    public Admin(String adminName, String adminEmail, String adminPassword, String adminType) {
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
        this.adminType = adminType;
    }

    public Admin() {
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
        return "Admin{" +
                "adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", adminEmail='" + adminEmail + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", adminType='" + adminType + '\'' +
                '}';
    }
}
