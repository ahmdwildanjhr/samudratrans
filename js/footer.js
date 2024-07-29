// Calculate the number of years from 2020 to the current year
$(document).ready(function () {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    $('#experience-years').text(experienceYears);
});