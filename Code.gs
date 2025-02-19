function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheetName = data.section + "_" + data.subject; // Create a sheet name dynamically
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Sheet not found" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var lastColumn = sheet.getLastColumn() + 1; // Find next available column
    var dateCell = sheet.getRange(1, lastColumn);
    var topicCell = sheet.getRange(2, lastColumn);
    var timeCell = sheet.getRange(3, lastColumn);

    // Insert Date, Topic, and Time
    dateCell.setValue(new Date()); // Current Date
    topicCell.setValue(data.topic);
    timeCell.setValue(data.time);

    // Insert Attendance Status for each student in correct rows
    var studentList = data.students;

    studentList.forEach((student, index) => {
      var row = findStudentRow(sheet, student.usn); // Find row based on USN
      if (row !== -1) {
        sheet.getRange(row, lastColumn).setValue(student.present ? "P" : "A"); // Mark Present (P) or Absent (A)
      }
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Attendance recorded" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to find student row based on USN
function findStudentRow(sheet, usn) {
  var usnColumn = sheet.getRange("A:A").getValues().flat(); // Get all USNs in column A
  var rowIndex = usnColumn.indexOf(usn);
  return rowIndex !== -1 ? rowIndex + 1 : -1; // Return row number (1-based)
}
