function calculateMarks(){

    let name = document.getElementById("name").value;
    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let total = sub1 + sub2;
    let average = total / 2;
    let bonus = sub1;
    bonus += 5;

    let greater = sub1 > sub2;
    let equal = sub1 == sub2;
    let bothPassed = sub1 > 35 && sub2 > 35;
    let above90 = sub1 > 90 || sub2 > 90;
    let incriment = sub1;
    incriment++;

    let decrement = sub2;
    decrement--;

    let result = average >= 35 ? "Pass" : "Fail";
    let grade;

    if(average >= 90){
        grade = "A Grade";
    }
    else if(average >= 75){
        grade = "B Grade";
    }
    else if(average >= 60){
        grade = "C Grade";
    }
    else if(average >= 35){
        grade = "D Grade";
    }
    else{
        grade = "Fail";
    }
    document.getElementById("studentName").innerHTML = "Student Name : " + name;
    document.getElementById("total").innerHTML = "Total Marks : " + total;
    document.getElementById("average").innerHTML = "Average : " + average;
    document.getElementById("bonus").innerHTML = "Bonus Marks : " + bonus;
    document.getElementById("greater").innerHTML = "Subject1 > Subject2 : " + greater;
    document.getElementById("equal").innerHTML = "Both Equal : " + equal;
    document.getElementById("bothPassed").innerHTML = "Both Passed : " + bothPassed;
    document.getElementById("above90").innerHTML = "Any Above 90 : " + above90;
    document.getElementById("inc").innerHTML = "Sub1 After ++ : " + incriment;
    document.getElementById("dec").innerHTML = "Sub2 After -- : " + decrement;
    document.getElementById("result").innerHTML = "Result : " + result;
    document.getElementById("grade").innerHTML = "Grade : " + grade;
}

