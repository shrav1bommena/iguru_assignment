let app = async () => {

    let url = "http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521"
    let options = {
        method: "GET"
    };
    let response = await fetch(url, options)
    //console.log(response)
    let data = await response.json()
    console.log(data.Response.ProgressList)
    let studentDetails = data.Response.ProgressList.lstStudentInfo[0]
    console.log(studentDetails)
    
    //Addiing one by one to the html
    //ScholarNo
    let studentScholarNo = studentDetails.AdmissionNumber
    let scholarNoElement = document.getElementById("scholarNo")
    scholarNoElement.textContent = studentScholarNo

    //RollNo
    let studentRollNo = studentDetails.RollNumber
    let rollNumberElement = document.getElementById("rollNo")
    rollNumberElement.textContent = studentRollNo

    //Father'sName
    let studentFatherName = studentDetails.FatherName
    let fatherNameElement = document.getElementById("father'sName")
    fatherNameElement.textContent = studentFatherName

    //AttandanceAttandence
    let attandence = 0
    studentDetails.Attandence.forEach(element => {
        let {MonthPresence} = element
        attandence = attandence + MonthPresence
    });
    let attandenceElement = document.getElementById("attandence")
    attandenceElement.textContent = attandence

    //class
    let className = studentDetails.ClassName
    let classNameElement = document.getElementById("class")
    classNameElement.textContent = className

    //Student'sName
    let studentName = studentDetails.Name
    let studentNameElement = document.getElementById("nameOfStudent")
    studentNameElement.textContent = studentName

    //Mother'sName
    let studentMotherName = studentDetails.MotherName
    let motherNameElement = document.getElementById("mother'sName")
    motherNameElement.textContent = studentMotherName

    //DOB
    let dateOfBirth = studentDetails.DOB
    let dateOfBirthElement = document.getElementById("dateOfBirth")
    dateOfBirthElement.textContent = dateOfBirth

    //bestPtEnglishTermI
    //can be done in two ways 
    //one is direct 
    //other is by subjectPropertyName
    //Term I
    let ptEnglishI = studentDetails.stInternals.find((eachSubject)=> {
        if (eachSubject.ClassSubject === "ENGLISH" && eachSubject.InternalExam === "PP I") {
            //console.log(eachSubject.ScoredMarks)
            return eachSubject
        }
    })
    let ptEnglishIMarks =  ptEnglishI.ScoredMarks
    let ptEnglishII = studentDetails.stInternals.find((eachSubject)=> {
        if (eachSubject.ClassSubject === "ENGLISH" && eachSubject.InternalExam === "PP II") {
            //console.log(eachSubject.ScoredMarks)
            return eachSubject
        }
    })
    let ptEnglishIIMarks =  ptEnglishII.ScoredMarks
    let bestPtEnglishI = ptEnglishIMarks
    if (bestPtEnglishI < ptEnglishIIMarks){
        bestPtEnglishI = ptEnglishIIMarks
    }
    console.log(bestPtEnglishI)

}

app()