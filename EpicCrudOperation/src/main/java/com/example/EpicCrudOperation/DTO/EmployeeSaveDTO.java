package com.example.EpicCrudOperation.DTO;

public class EmployeeSaveDTO {
    private String employeeName;
    private String employeeEmail;
    private String employeeAddress;
    private int mobileNumber;
    private String employeePassword;

    public EmployeeSaveDTO(String employeeName, String employeeEmail, String employeeAddress, int mobileNumber, String employeePassword) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
        this.employeePassword = employeePassword;
    }

    public EmployeeSaveDTO() {
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
        return "EmployeeSaveDTO{" +
                "employeeName='" + employeeName + '\'' +
                ", employeeEmail='" + employeeEmail + '\'' +
                ", employeeAddress='" + employeeAddress + '\'' +
                ", mobileNumber=" + mobileNumber +
                ", employeePassword='" + employeePassword + '\'' +
                '}';
    }
}
