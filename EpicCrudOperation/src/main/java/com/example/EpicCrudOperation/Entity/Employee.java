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
    @Column(name = "employee_address", length = 50)
    private String employeeAddress;
    @Column(name = "employee_mobile", length = 10)
    private int mobileNumber;

    public Employee(int employeeId, String employeeName, String employeeAddress, int mobileNumber) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
    }

    public Employee(String employeeName, String employeeAddress, int mobileNumber) {
        this.employeeName = employeeName;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
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

    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", employeeName='" + employeeName + '\'' +
                ", employeeAddress='" + employeeAddress + '\'' +
                ", mobileNumber=" + mobileNumber +
                '}';
    }
}
