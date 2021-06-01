"use strict";

let courses = [{
    id: "19SUM100",
    title: "Introduction to HTML/CSS/Git",
    instructor: "Wyatt",
    location: "Classroom 7",
    startDate: "07/08/19",
    fee: 100.00,
},
{
    id: "19SUM200",
    title: "Introduction to JavaScript",
    instructor: "Lynn",
    location: "Classroom 8",
    startDate: "07/22/19",
    fee: 350.00,
},
{
    id: "19SUM300",
    title: "Introduction to Node.JS and Express",
    instructor: "Gross",
    location: "Classroom 4",
    startDate: "09/09/19",
    fee: 50.00,
},
{
    id: "19SUM400",
    title: "Introduction to SQL and Databases",
    instructor: "Wyatt",
    location: "Classroom 6",
    startDate: "09/16/19",
    fee: 50.00,
},
{
    id: "19SUM500",
    title: "Introduction to Angular",
    instructor: "Lynn",
    location: "Classroom 7",
    startDate: "09/23/19",
    fee: 50.00,
},
{
    id: "19SUM1001",
    title: "Introduction to Finance",
    instructor: "Wyatt",
    location: "Classroom 7",
    startDate: "07/08/19",
    fee: 100.00,
},
{
    id: "19SUM2002",
    title: "Introduction to Accounting",
    instructor: "Lynn",
    location: "Classroom 8",
    startDate: "07/22/19",
    fee: 350.00,
},
{
    id: "19SUM3003",
    title: "Introduction to REACT",
    instructor: "Gross",
    location: "Classroom 4",
    startDate: "09/09/19",
    fee: 50.00,
},
{
    id: "19SUM4004",
    title: "Introduction to Business",
    instructor: "Wyatt",
    location: "Classroom 6",
    startDate: "09/16/19",
    fee: 50.00,
},
{
    id: "19SUM5005",
    title: "Introduction to ENG",
    instructor: "Lynn",
    location: "Classroom 7",
    startDate: "09/23/19",
    fee: 50.00,
}
];

window.onload = function () {
    loadTitlesDropdown();
    const showDetailsBtn = document.getElementById("showDetailsBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;
}

function loadTitlesDropdown() {
    const titlesDropdown = document.getElementById("titlesDropdown");

    //At the bottom of the loadTitlesDropdown() function, write to programmatically 
    //select the "Select one..." option before the page displays
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    titlesDropdown.appendChild(selectOneOption);

    for (let i = 0; i < courses.length; i++) {
        // create an option each time we go through the loop
        // <option value="xxx">text</option>
        let theOption = document.createElement("option");
        theOption.textContent = courses[i].title;
        theOption.value = courses[i].id;

        // add that option to the select element 
        titlesDropdown.appendChild(theOption);

    }
}

function showDetailsBtnClicked() {
    //erase previous trail info
    const idPara = document.getElementById("idPara");
    idPara.innerHTML = "";

    const titlePara = document.getElementById("titlePara");
    titlePara.innerHTML = "";

    const instructorPara = document.getElementById("instructorPara");
    instructorPara.innerHTML = "";

    const startDatePara = document.getElementById("startDatePara");
    startDatePara.innerHTML = "";

    const feePara = document.getElementById("feePara");
    feePara.innerHTML = "";

    const locationPara = document.getElementById("locationPara");
    locationPara.innerHTML = "";

    // In the click event of the button, extract the value of the selected option
    // If it is the empty string, use an alert to display a message 
    //and exit out the out of the event handler
    const titlesDropdown = document.getElementById("titlesDropdown");
    let selectedCourseId = titlesDropdown.value;
    // testing to see if the user has selected "Select one..."
    if (selectedCourseId == "") {
        alert("Please select a course");
      return;
    }
    // display the selected value (which is the course id of the title the user
    //picked) in the paragraph for course id 
    let matchingCourse = courses.find(arrayElement => arrayElement.id == selectedCourseId);
    // display the specific matching courses data below the button in the details area 
    idPara.innerHTML = "Course Id: " + matchingCourse.id;
    titlePara.innerHTML = "Course Title: " + matchingCourse.title;
    locationPara.innerHTML = "Location: " + matchingCourse.location;
    instructorPara.innerHTML = "Instructor: " + matchingCourse.instructor;
    startDatePara.innerHTML = "Start Date: " + matchingCourse.startDate;
    feePara.innerHTML = "Fee: $" + matchingCourse.fee;

}