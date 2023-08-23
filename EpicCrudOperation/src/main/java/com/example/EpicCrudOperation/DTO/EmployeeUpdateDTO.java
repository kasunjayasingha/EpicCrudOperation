package com.example.EpicCrudOperation.DTO;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class EmployeeUpdateDTO {

    private int employeeId;
    private String employeeName;
    private String employeeEmail;
    private String employeeAddress;
    private int mobileNumber;
    private String employeePassword;

    public EmployeeUpdateDTO(int employeeId, String employeeName, String employeeEmail, String employeeAddress, int mobileNumber, String employeePassword) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
        this.employeePassword = employeePassword;
    }

    public EmployeeUpdateDTO() {
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
        return "EmployeeDTO{" +
                "employeeId=" + employeeId +
                ", employeeName='" + employeeName + '\'' +
                ", employeeEmail='" + employeeEmail + '\'' +
                ", employeeAddress='" + employeeAddress + '\'' +
                ", mobileNumber=" + mobileNumber +
                ", employeePassword='" + employeePassword + '\'' +
                '}';
    }
}
