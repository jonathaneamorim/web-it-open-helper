export default function Mysql() {
  return (
    <>
        <p>My Sql</p>

        <code>
            select * from HR.COUNTRIES;

select * from HR.EMPLOYEES;


select FIRST_NAME, DEPARTMENT_NAME 
from HR.EMPLOYEES E INNER JOIN HR.DEPARTMENTS D 
ON E.DEPARTMENT_ID = D.DEPARTMENT_ID;


<!-- Listar o maior e o menor salário da empresa --> 
select MAX(Salary), MIN(Salary)
from HR.EMPLOYEES;

<!-- O total da folha de pagamento e a quantidade de funcionarios -->
select MAX(Salary), MIN(Salary), TRUNC(AVG(Salary), 2), SUM(Salary), COUNT(*)
from HR.EMPLOYEES;

<!-- Listar o total de funcionarios da empresa e o total de funcionarios comissionados --> 
select 
    COUNT(EMPLOYEE_ID) as TOTAL_FUNCIONARIOS, 
    COUNT(COMMISSION_PCT) COMISSIONADOS, 
    TRUNC(COUNT(COMMISSION_PCT)/COUNT(EMPLOYEE_ID)*100, 2) "PERCENTUAL DE COMISSIONADOS" 
from HR.EMPLOYEES;

<!-- Listar o maior e o menor salaŕio por departamento. Apresentar no resultado os maiores e menores salarios e o ID do departamento -->
select DEPARTMENT_ID, MAX(SALARY) MAIOR, MIN(SALARY) menor
FROM HR.EMPLOYEES
GROUP BY DEPARTMENT_ID;

<!-- Mostrar o nome do funcionario que tem o maior salario dentre todos na empresa -->
SELECT FIRST_NAME || ' ' || LAST_NAME AS NOME_COMPLETO, SALARY SALARIO
FROM HR.EMPLOYEES
WHERE SALARY = (SELECT MAX(SALARY) FROM HR.EMPLOYEES);

<!-- MOSTRAR O NOME DOS FUNCIONARIO QUE GANHAM O MENOR E O MAIOR SALARIO -->
SELECT FIRST_NAME || ' ' || LAST_NAME AS NOME_COMPLETO, SALARY salario
FROM HR.EMPLOYEES
WHERE 
    SALARY = (SELECT MAX(SALARY) FROM HR.EMPLOYEES) OR
    SALARY = (SELECT MIN(SALARY) FROM HR.EMPLOYEES);

<!-- HAVING É O FILTRO DO GROUP BY (USAR HAVING SOMENTE SE HOUVER UM GROUP BY) -->
<!-- Listar o maior salario em cada departamento. Mostrar no resultado apenas os departamentos que tenham maior salário superior a 10000 -->
SELECT DEPARTMENT_ID, MAX(SALARY) MAIOR
FROM HR.EMPLOYEES
GROUP BY DEPARTMENT_ID
HAVING MAX(SALARY) > 10000
ORDER BY DEPARTMENT_ID;

<!-- Usar o any e o all quando houver subconsultas -->
<!-- Utilizar o ANY ou ALL somente quando a subconsulta resultar em multiplas linhas -->

<!-- Mostrar  Media dos salarios  -->


<!-- Mostrar os funcionarios que tenham salário maior ou igual à qualquer media de salários dos departamentos da empresa -->
SELECT * 
    FROM HR.EMPLOYEES
    WHERE SALARY >= ANY (
                        SELECT 
                            AVG(SALARY) 
                            FROM HR.EMPLOYEES 
                            GROUP BY DEPARTMENT_ID
);
        </code>


        create table funcionarios as select * from hr.employees;
create table departamentos as select * from hr.departments;

-- função para obter o nome completo do funcionário (fisrt_name concatenado ao last_name) passando o employee_id como parâmetro da função;
-- CURSOR: VARIÁVEL QUE GUARDA O RESULTADO DE UM SELECT (PRECISA SEMPRE DE UMA VARIÁVEL DO TIPO RECORD)

CREATE OR REPLACE PACKAGE pckFuncionarios IS
    FUNCTION GET_FULL_NAME (EMP_ID IN NUMBER) RETURN VARCHAR2;
	]
	FUNCTION b (p_employee_id IN NUMBER) 
    	RETURN NUMBER IS SALARY NUMBER;
	
	PROCEDURE C (P_DEPARTMENT_ID IN NUMBER);
	--FUNCTION D RETURN NUMBER;
	--PROCEDURE E (P_DEPARTMENT IN NUMBER);
	--PROCEDURE F;
END pckFuncionarios;
/

CREATE OR REPLACE PACKAGE BODY pckFuncionarios IS
    FUNCTION GET_FULL_NAME(EMP_ID IN NUMBER)
    	RETURN VARCHAR2 IS
    	V_NOME VARCHAR2(200);
    	BEGIN
    		SELECT FIRST_NAME || ' ' || LAST_NAME INTO V_NOME
        	FROM FUNCIONARIOS
        	WHERE EMP_ID = EMPLOYEE_ID;
        	RETURN V_NOME;
    	END;

    FUNCTION b (EMP_ID IN NUMBER) 
        RETURN NUMBER IS 
        salario NUMBER;
    BEGIN 
        SELECT salary
        INTO salario 
        FROM hr.employees 
        WHERE EMP_ID = EMPLOYEE_ID;
        
        RETURN salario;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN 'Funcionário não encontrado';
END;

PROCEDURE C(P_DEPARTMENT_ID IN NUMBER) IS 
    CURSOR CURfUNCIONARIOS 
    	SELECT FIRST_NAME || ' ' || LAST_NAME, DEPARTMENT_NAME
    FROM FUNCIONARIOS F INNER JOIN DEPARTAMENTOS D ON F.DEPARTMENT_ID = D.DEPARTMENT_iD
    WHERE DEPARTMENT_ID = PDEPARTMENT_ID;
	RECFUNCIONARIOS CURFUNCIONARIOS%ROWTYPE; -- DECLARAÇÃO DE VARIÁVEL DO TIPO RECORD
BEGIN 
    FOR RECFUNCIONARIOS IN CURFUNCIONARIOS LOOP
    DBMS_OUTPUT.PUT_LINE('NOME: ' || RECFUNCIONARIOS.NOME_COMPLETO || ' DEPARTAMENTO: ' || RECFUNCIONARIOS.DEPARTMENT_NAME)
    END LOOP;
END;

END pckFuncionarios;


-- Criar uma função que deverá receber um valor correspondente à temperatura em graus Fahrenheit e retornar o equivalente em graus Celsius. A fórmula para conversão é: C = (F-32)/1.8

CREATE OR REPLACE FUNCTION F_TO_C (P_F NUMBER) /* Declara a função */
RETURN NUMBER IS /* Define que o retorno será do tipo number */
 V_C NUMBER(4,1); /* Define uma variável do tipo number(4,1) */
BEGIN /* Declara o inicio do código da função */
 V_C := (P_F - 32) / 1.8; /* realiza o cálculo */
 RETURN V_C; /* Retorna o valor do cálculo */
END F_TO_C; /* declara o fim da função */
/

-- Criar uma função que deverá receber o número de matrícula de um funcionário e retornar seu nome e o nome de seu departamento. Considere as tabelas employees e departments do esquema HR do LiveSQL e faça uma cópia de cada uma delas para que você possa criar a sua função (conforme script abaixo).

CREATE OR REPLACE FUNCTION CONSULTA_FUNC(P_MATRICULA NUMBER)
 RETURN VARCHAR2 IS
 V_NOME FUNCIONARIO.NOME%TYPE;
 V_NOME_DEPTO DEPARTAMENTO.NOME_DEPTO%TYPE;

BEGIN
 SELECT NOME, NOME_DEPTO INTO V_NOME, V_NOME_DEPTO
 FROM FUNCIONARIO INNER JOIN DEPARTAMENTO
 ON FUNCIONARIO.COD_DEPTO = DEPARTAMENTO.COD_DEPTO
 WHERE MATRICULA = P_MATRICULA;
 
 RETURN (V_NOME || ' - ' || V_NOME_DEPTO);
END CONSULTA_FUNC;
/

-- função para obter o nome completo do funcionário (fisrt_name concatenado ao last_name) passando o employee_id como parâmetro da função

CREATE OR REPLACE FUNCTION GET_NAME (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	NOME VARCHAR2(100);
BEGIN 
	SELECT FIRST_NAME || ' ' || LAST_NAME INTO NOME
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
	RETURN NOME;
END GET_NAME; 
/

-- função para obter o salário do funcionário passando o employee_id como parâmetro da função;

CREATE OR REPLACE FUNCTION GET_SALARY (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	SAL FUNCIONARIOS.SALARY%TYPE;
BEGIN 
	SELECT SALARY INTO SAL
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
 
	RETURN SAL;
END GET_SALARY; 
/

BEGIN 
    DBMS_OUTPUT.PUT_LINE('SALARIO: ' || GET_SALARY(123)));
    
-- função para obter o nome completo do funcionário que trabalha em um determinado departamento. Mostre também o nome deste departamento. Passe o department_id como parâmetro.

CREATE OR REPLACE FUNCTION get_employee_by_dept(
    p_dept_id IN NUMBER
) RETURN VARCHAR2
IS
    v_result VARCHAR2(200);
    v_employee_name VARCHAR2(100);
    v_department_name VARCHAR2(100);
BEGIN
    SELECT e.first_name || ' ' || e.last_name, d.department_name
    INTO v_employee_name, v_department_name
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    WHERE e.department_id = p_dept_id
    AND ROWNUM = 1;
    
    v_result := 'Funcionário: ' || v_employee_name || ', Departamento: ' || v_department_name;
    
    RETURN v_result;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 'Nenhum funcionário encontrado no departamento com ID: ' || p_dept_id;
    WHEN OTHERS THEN
        RETURN 'Erro ao buscar funcionário: ' || SQLERRM;
END;
/
-- função para obter o valor total da folha de pagamento (soma de salários) dos funcionários da empresa

CREATE OR REPLACE FUNCTION GET_PAYMENT 
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 
	SELECT SUM(SALARY) INTO V_FOLHA FROM EMPLOYEES;
	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT);
END;

-- função que aplique um aumento de 10% no salário dos funcionários de um determinado departamento e retorne como resultado da função o novo total de salário deste departamento. Passe o department_id como parâmetro.

CREATE OR REPLACE FUNCTION GET_PAYMENT_WITH_ACS(DEPT_ID NUMBER)
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 

    UPDATE EMPLOYEES 
    SET SALARY = SALARY * 1.1 
    WHERE DEPARTMENT_ID = DEPT_ID;
    	
	SELECT SUM(SALARY) INTO V_FOLHA 
    FROM EMPLOYEES;
	WHERE DEPARTMENT_ID = DEPT_ID;
	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT_WITH_ACS(123));
END;

-- procedimento que imprima uma listagem dos funcionários com os seguintes dados: nome completo do funcionário, data de contratação (hire_date), número de telefone, e-mail, nome do gerente, nome do departamento, salário e percentual de comissão. Dica: você precisará fazer uma junção da tabela funcionarios com ela mesma para obter o nome do gerente.

CREATE OR REPLACE PROCEDURE listar_funcionarios_simples
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Listagem de Funcionários:');
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    FOR func IN (
        SELECT 
            e.first_name || ' ' || e.last_name AS nome_completo,
            e.hire_date,
            e.phone_number,
            e.email,
            m.first_name || ' ' || m.last_name AS nome_gerente,
            d.department_name,
            e.salary,
            e.commission_pct
        FROM 
            employees e
        LEFT JOIN 
            employees m ON e.manager_id = m.employee_id
        LEFT JOIN 
            departments d ON e.department_id = d.department_id
        ORDER BY 
            e.last_name, e.first_name
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Nome: ' || func.nome_completo ||
            ', Data Contratação: ' || func.hire_date ||
            ', Telefone: ' || NVL(func.phone_number, 'N/A') ||
            ', Email: ' || func.email ||
            ', Gerente: ' || NVL(func.nome_gerente, 'N/A') ||
            ', Departamento: ' || NVL(func.department_name, 'N/A') ||
            ', Salário: ' || func.salary ||
            ', Comissão: ' || NVL(TO_CHAR(func.commission_pct), 'N/A')
        );
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    DBMS_OUTPUT.PUT_LINE('Fim da listagem');
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro ao listar funcionários: ' || SQLERRM);
END;
/


create table funcionarios as select * from hr.employees;
create table departamentos as select * from hr.departments;

CREATE OR REPLACE FUNCTION GET_NAME (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	NOME VARCHAR2(100);
BEGIN 
	SELECT FIRST_NAME || ' ' || LAST_NAME INTO NOME
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
 
	RETURN NOME;

END GET_NAME; 
/

CREATE OR REPLACE FUNCTION GET_SALARY (EMP_ID IN funcionarios.EMPLOYEE_ID%TYPE) 
RETURN VARCHAR2 IS 
	SAL FUNCIONARIOS.SALARY%TYPE;
BEGIN 
	SELECT SALARY INTO SAL
    FROM FUNCIONARIOS
    WHERE funcionarios.EMPLOYEE_ID = EMP_ID;
 
	RETURN SAL;

END GET_SALARY; 
/


BEGIN 
    DBMS_OUTPUT.PUT_LINE('SALARIO: ' || GET_SALARY(123)));


INSERT INTO FUNCIONARIOS (EMPLOYEE_ID, FIRST_NAME, LAST_NAME) 
VALUES(1, 'jONH', 'LEMON');


CREATE OR REPLACE FUNCTION FUNC_DEPT (DEPT_ID IN NUMBER) 
RETURN VARCHAR2 IS 
	EMP_FIRST_NAME
    EMP_LAST_NAME EMPLOYEES
    DEPT_NAME HR.DEPARTMENTS.DEPARTMENT_NAME%TYPE;
BEGIN 
	SELECT FIRST_NAME, LAST_NAME, DEPARTMENT_NAME INTO EMP_FIRST_NAME, EMP_LAST_NAME, DEPT_NAME
    FROM HR.EMPLOYEES JOIN HR.DEPARTMENTS
    ON HR.EMPLOYEES.DEPARTMENT_ID  = DEPT_ID
    WHERE 
 
	RETURN SAL;

END FUNC_DEPT; 



CREATE OR REPLACE FUNCTION GET_PAYMENT 
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 
	SELECT SUM(SALARY) INTO V_FOLHA FROM EMPLOYEES;
	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT);
END;


CREATE OR REPLACE FUNCTION GET_PAYMENT_WITH_ACS(DEPT_ID NUMBER)
RETURN NUMBER IS
	V_FOLHA NUMBER;
BEGIN 

    UPDATE EMPLOYEES 
    SET SALARY = SALARY * 1.1 
    WHERE DEPARTMENT_ID = DEPT_ID;
    	
	SELECT SUM(SALARY) INTO V_FOLHA 
    FROM EMPLOYEES;
	WHERE DEPARTMENT_ID = DEPT_ID;

	RETURN V_FOLHA;
END;

BEGIN 
	DBMS_OUTPUT.PUT_LINE(GET_PAYMENT_WITH_ACS(123));
END;

CREATE OR REPLACE PROCEDURE LIST_FUNC 
IS
CURSOR EMP_CUR IS 
SELECT DADOS

FROM FUNCIONARIOS
F
JOIN DEPARTAMENTOS D ON D.DEPARTMENT_ID = F.DEPARTMENT_ID
LEFT JOIN FUNCIONARIOS FU ON FU.EMPLOYEE_ID = F.MANAGER_ID;
BEGIN
FOR EMP_REC IN EMP_CUR LOOP
DBMS_OUTPUT.PUT_LINE(PRINTBONITINHO)
END LOOP;
END


-- Questão 1
CREATE OR REPLACE VIEW V_EXPENSIVE_SUBPRODUCT AS
SELECT PROD_SUBCATEGORY, PROD_LIST_PRICE
FROM SH.PRODUCTS;

-- Questão 2
CREATE OR REPLACE VIEW V_MAX_CLIENT AS
SELECT c.CUSTOMER_NAME, SUM(s.SALE_AMOUNT) / COUNT(DISTINCT s.SALE_DATE) AS VALOR_MEDIO_COMPRAS
FROM SH.CUSTOMERS c
JOIN SH.SALES s ON c.CUSTOMER_ID = s.CUSTOMER_ID
WHERE s.SALE_DATE BETWEEN TO_DATE('1998-01-01', 'YYYY-MM-DD') AND TO_DATE('1998-12-31', 'YYYY-MM-DD')
GROUP BY c.CUSTOMER_NAME
HAVING SUM(s.SALE_AMOUNT) / COUNT(DISTINCT s.SALE_DATE) > (
    SELECT AVG(sub_total)
    FROM (
            SELECT SUM(SALE_AMOUNT) AS sub_total
            FROM SH.SALES
            WHERE SALE_DATE BETWEEN TO_DATE('1998-01-01', 'YYYY-MM-DD') AND TO_DATE('1998-12-31', 'YYYY-MM-DD')
            GROUP BY CUSTOMER_ID
        )
);

-- Questão 3
CREATE OR REPLACE VIEW V_EMP_DALLAS_CHICAGO AS
SELECT
    e.ENAME AS "Nome do Funcionário",
    e.JOB AS "Função",
    d.DNAME AS "Departamento",
    CASE
        WHEN e.COMM IS NOT NULL THEN e.SAL + e.COMM
        ELSE e.SAL
    END AS "Salário Total"
FROM SCOTT.EMP e
JOIN SCOTT.DEPT d ON e.DEPTNO = d.DEPTNO
WHERE d.LOC IN ('DALLAS', 'CHICAGO');


-- Questão 4
CREATE OR REPLACE VIEW V_FUNC_SALARY_GERENTE AS
SELECT FUNC.FIRST_NAME, FUNC.SALARY, MANAG.FIRST_NAME
FROM HR.EMPLOYEES FUNC INNER JOIN HR.EMPLOYEES MANAG
ON FUNC.MANAGER_ID = MANAG.EMPLOYEE_ID;

-- Questão 5
CREATE OR REPLACE VIEW V_EMP_LOC AS
	SELECT HR.EMPLOYEES.FIRST_NAME, HR.DEPARTMENTS.DEPARTMENT_NAME, HR.LOCATIONS.CITY 	
    FROM HR.EMPLOYEES 
    INNER JOIN HR.DEPARTMENTS 
    	ON HR.EMPLOYEES.DEPARTMENT_ID = HR.DEPARTMENTS.DEPARTMENT_ID
	INNER JOIN HR.LOCATIONS 
    	ON HR.LOCATIONS.LOCATION_ID = HR.DEPARTMENTS.LOCATION_ID;

-- Questão 6
CREATE OR REPLACE VIEW V_DEPT_NAME AS
	SELECT HR.EMPLOYEES.FIRST_NAME, HR.JOBS.JOB_TITLE, HR.DEPARTMENTS.DEPARTMENT_ID, HR.DEPARTMENTS.DEPARTMENT_NAME
	FROM HR.EMPLOYEES
	INNER JOIN HR.DEPARTMENTS 123
    	ON HR.DEPARTMENTS.DEPARTMENT_ID = HR.EMPLOYEES.DEPARTMENT_ID
	INNER JOIN HR.JOBS
		ON HR.JOBS.JOB_ID = HR.EMPLOYEES.JOB_ID    
    INNER JOIN HR.LOCATIONS
    	ON HR.DEPARTMENTS.LOCATION_ID = HR.LOCATIONS.LOCATION_ID 
	WHERE HR.LOCATIONS.CITY IN ('Tokyo', 'Roma', 'Oxford', 'Munich');

-- Questão 7
CREATE OR REPLACE VIEW V_EMP_MAN AS
	SELECT EMP.FIRST_NAME funcionario, EMP.EMPLOYEE_ID nr_funcionario, MAN.FIRST_NAME gerente, MAN.MANAGER_ID nr_gerente
    FROM HR.EMPLOYEES EMP INNER JOIN HR.EMPLOYEES MAN 
    ON  EMP.EMPLOYEE_ID = MAN.MANAGER_ID;

-- Questão 8
CREATE OR REPLACE VIEW V_DEP_MAN_NAME AS
	SELECT MAN.FIRST_NAME, D.DEPARTMENT_NAME, L.CITY
	FROM HR.EMPLOYEES EMP 
    INNER JOIN HR.EMPLOYEES MAN ON  EMP.EMPLOYEE_ID = MAN.MANAGER_ID
	INNER JOIN HR.DEPARTMENTS D ON D.DEPARTMENT_ID = MAN.DEPARTMENT_ID	
    INNER JOIN HR.LOCATIONS L ON D.LOCATION_ID = L.LOCATION_ID;

-- Questão 9
CREATE OR REPLACE VIEW V_NAME_JOB AS
    SELECT FIRST_NAME, JOB_TITLE, SALARY
    FROM HR.EMPLOYEES EMP INNER JOIN HR.JOBS JOB
    ON EMP.JOB_ID = JOB.JOB_ID
    WHERE SALARY > 3850;

-- Questão 10
CREATE OR REPLACE VIEW V_NAME_AVG AS
    SELECT FIRST_NAME, SALARY 
    FROM HR.EMPLOYEES
    WHERE SALARY NOT BETWEEN 1500 AND 2850;

-- Questão 11
CREATE OR REPLACE VIEW V_DEPT AS
	SELECT HR.EMPLOYEES.SALARY SalarioMensal, HR.EMPLOYEES.FIRST_NAME Funcionario
    FROM HR.EMPLOYEES
	WHERE HR.EMPLOYEES.SALARY > 1500
    AND HR.EMPLOYEES.DEPARTMENT_ID IN (10, 30);

-- Questão 12
CREATE OR REPLACE VIEW V_MANAG AS
	SELECT HR.EMPLOYEES.FIRST_NAME, HR.JOBS.JOB_TITLE
    FROM HR.EMPLOYEES
    INNER JOIN HR.JOBS ON HR.JOBS.JOB_ID = HR.EMPLOYEES.JOB_ID
	WHERE HR.EMPLOYEES.MANAGER_ID IS NULL;

-- Questão 13
CREATE OR REPLACE VIEW V_COM AS
	SELECT EMPLOYEES.FIRST_NAME, EMPLOYEES.SALARY, NVL(EMPLOYEES.COMMISSION_PCT, 'não comissionado') AS COMMISSION_PCT 
    FROM HR.EMPLOYEES;

-- Questão 14
CREATE OR REPLACE VIEW V_NAME AS
    SELECT FIRST_NAME || ' ' || LAST_NAME AS FUNCIONARIO
    FROM HR.EMPLOYEES 
    WHERE (LOWER(FIRST_NAME) LIKE '%ss%' 
    OR LOWER(LAST_NAME) LIKE '%ss%' 
    AND DEPARTMENT_ID = 30) OR MANAGER_ID = 103;

-- Questão 15
CREATE OR REPLACE VIEW V_PROGRAMERS AS
	SELECT EMPLOYEES.FIRST_NAME, EMPLOYEES.SALARY, JOBS.JOB_TITLE 
    FROM HR.EMPLOYEES
    LEFT JOIN HR.JOBS ON JOBS.JOB_ID = EMPLOYEES.JOB_ID;

-- Questão 16
CREATE OR REPLACE VIEW V_SALARY AS
    SELECT DEPARTMENTS.DEPARTMENT_NAME, SUM(EMPLOYEES.SALARY) AS TOTAL_SALARY
    FROM HR.EMPLOYEES
    INNER JOIN HR.DEPARTMENTS ON DEPARTMENTS.DEPARTMENT_ID = EMPLOYEES.DEPARTMENT_ID
    GROUP BY DEPARTMENTS.DEPARTMENT_NAME HAVING SUM(EMPLOYEES.SALARY) > 5000;

-- Questão 17
CREATE OR REPLACE VIEW V_FUNC_SAL AS  
    SELECT  JOBS.JOB_TITLE, MAX(EMPLOYEES.SALARY) AS "Mais alto por função"  
    FROM  HR.EMPLOYEES
    INNER JOIN HR.JOBS ON EMPLOYEES.JOB_ID = JOBS.JOB_ID 
    GROUP BY JOBS.JOB_TITLE
    HAVING MAX(EMPLOYEES.SALARY) <= 10000;

-- Questão 18
CREATE OR REPLACE VIEW V_AVG_SAL AS
    SELECT JOBS.JOB_TITLE, AVG(EMPLOYEES.SALARY) AS "Média de salário por função"
    FROM HR.EMPLOYEES
    INNER JOIN HR.JOBS 
    ON EMPLOYEES.JOB_ID = JOBS.JOB_ID
    WHERE OBS.JOB_TITLE LIKE '%Manager%'
    GROUP BY JOBS.JOB_TITLE;

-- Questão 19
CREATE OR REPLACE VIEW V_AVG_SAL_EMP AS
    SELECT JOBS.JOB_TITLE, AVG(EMPLOYEES.SALARY) AS "Média de salário por função"
    FROM HR.EMPLOYEES
    INNER JOIN HR.JOBS 
    ON EMPLOYEES.JOB_ID = JOBS.JOB_ID
    WHERE JOBS.JOB_TITLE LIKE '%Manager%'
    GROUP BY JOBS.JOB_TITLE
    HAVING AVG(EMPLOYEES.SALARY) BETWEEN 10500 AND 12500;

-- Questão 20
CREATE OR REPLACE VIEW DEPART_MANAG AS
    SELECT DEPARTMENTS.DEPARTMENT_NAME, COUNT(EMPLOYEES.EMPLOYEE_ID) AS NUM_GERENTES
    FROM HR.EMPLOYEES
    INNER JOIN HR.DEPARTMENTS 
    ON EMPLOYEES.DEPARTMENT_ID = DEPARTMENTS.DEPARTMENT_ID
    WHERE EMPLOYEES.JOB_TITLE LIKE '%Manager%'
    GROUP BY DEPARTMENTS.DEPARTMENT_NAME
    HAVING COUNT(EMPLOYEES.EMPLOYEE_ID) > 1;
    </>
  )
};