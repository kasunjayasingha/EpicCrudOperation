package com.example.EpicCrudOperation.Entity;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @Column(name = "employee_id", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeId;
    @Column(name = "employee_name", length = 50)
    private String employeeName;
    @Column(name = "employee_email", length = 50)
    private String employeeEmail;
    @Column(name = "employee_address", length = 50)
    private String employeeAddress;
    @Column(name = "employee_mobile", length = 10)
    private int mobileNumber;
    @Column(name = "employee_password", length = 50)
    private String employeePassword;

    public Employee(int employeeId, String employeeName, String employeeEmail, String employeeAddress, int mobileNumber, String employeePassword) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
        this.employeePassword = employeePassword;
    }


    public Employee(String employeeName, String employeeEmail, String employeeAddress, int mobileNumber, String employeePassword) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
        this.employeePassword = employeePassword;
    }

    public Employee() {
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeEmail() {
        return employeeEmail;
    }

    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public String getEmployeeAddress() {
        return employeeAddress;
    }

    public void setEmployeeAddress(String employeeAddress) {
        this.employeeAddress = employeeAddress;
    }

    public int getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(int mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmployeePassword() {
        return employeePassword;
    }

    public void setEmployeePassword(String employeePassword) {
        this.employeePassword = employeePassword;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", employeeName='" + employeeName + '\'' +
                ", employeeEmail='" + employeeEmail + '\'' +
                ", employeeAddress='" + employeeAddress + '\'' +
                ", mobileNumber=" + mobileNumber +
                ", employeePassword='" + employeePassword + '\'' +
                '}';
    }
}
