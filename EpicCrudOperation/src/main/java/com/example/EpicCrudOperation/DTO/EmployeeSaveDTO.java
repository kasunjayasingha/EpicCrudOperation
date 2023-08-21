package com.example.EpicCrudOperation.DTO;

public class EmployeeSaveDTO {
    private String employeeName;
    private String employeeAddress;
    private int mobileNumber;

    public EmployeeSaveDTO(String employeeName, String employeeAddress, int mobileNumber) {
        this.employeeName = employeeName;
        this.employeeAddress = employeeAddress;
        this.mobileNumber = mobileNumber;
    }

    public EmployeeSaveDTO() {
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
        return "EmployeeSaveDTO{" +
                "employeeName='" + employeeName + '\'' +
                ", employeeAddress='" + employeeAddress + '\'' +
                ", mobileNumber=" + mobileNumber +
                '}';
    }
}
