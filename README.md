# Project Architecture

```mermaid
C4Context
    title System Context diagram for Employee Directory System
    Enterprise_Boundary(b0, "EmployeeDirectoryBoundary") {
        Person(user, "User", "A user of the Employee Directory System.")
        
        System(SystemAA, "Employee Directory System", "Allows users to manage employee information.")

        Enterprise_Boundary(b1, "EmployeeDirectoryBoundary") {

            SystemDb_Ext(SystemE, "MySQL Database", "Stores all employee information.")

            System_Boundary(b2, "Backend") {
                System(A, "Spring Boot Application", "Handles business logic and data processing.")
                System(B, "EmployeeController", "Handles HTTP requests for employee operations.")
                System(C, "EmployeeService", "Contains business logic for employee operations.")
                System(D, "EmployeeServiceImp", "Implementation of EmployeeService.")
                System(E, "EmployeeDAO", "Data Access Object for employee operations.")
                System(F, "EmployeeDAOImp", "Implementation of EmployeeDAO.")
                System(G, "Employee", "Represents the employee entity.")
                System(H, "EntityManager", "Handles database operations.")
            }

            System_Boundary(b3, "Frontend") {
                System(I, "React Application", "User interface for managing employees.")
                System(J, "App.js", "Main application component.")
                System(K, "AddEmployee.js", "Component for adding new employees.")
                System(L, "Table.js", "Component for displaying employee data.")
            }
        }
    }

    BiRel(user, SystemAA, "Uses")
    BiRel(SystemAA, SystemE, "Uses")
    Rel(SystemAA, A, "Uses")
    Rel(A, B, "Uses")
    Rel(B, C, "Uses")
    Rel(C, D, "Uses")
    Rel(D, E, "Uses")
    Rel(E, F, "Uses")
    Rel(F, G, "Uses")
    Rel(F, H, "Uses")
    Rel(A, SystemE, "Uses")
    Rel(I, J, "Uses")
    Rel(J, K, "Uses")
    Rel(J, L, "Uses")
    Rel(J, A, "Uses")
