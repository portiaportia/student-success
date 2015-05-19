  //list dates in array
  var dates = new Array();
  dates[0] = [new Date(2015, 7, 24), 1, "Classes Begin", "Fall Semester"];
  dates[1] = [new Date(2015, 7, 28), 0, "Tutee Seminar", "Academic Success Center", "12pm, 1pm, or 2pm", "Dinkins Auditorium"];
  dates[2] = [new Date(2015, 8, 4), 0, "Tutee Seminar", "Academic Success Center", "1pm or 2pm", "Dinkins Auditorium"];
  dates[3] = [new Date(2015, 8, 7), 2, "Labor Day Holiday", "No Classes"];
  dates[4] = [new Date(2015, 8, 8), 0, "Student Involvement Fair", "11am", "Campus Green"];
  dates[5] = [new Date(2015, 8, 11), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"]; 
  dates[6] = [new Date(2015, 8, 15), 0, "Volunteer Fair", "Scholars Walk"];		  
  dates[7] = [new Date(2015, 8, 18), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];	  
  dates[8] = [new Date(2015, 8, 24), 0, "Study Abroad Fair", "10:30am-1:30pm", "DIGS"];
  dates[9] = [new Date(2015, 8, 25), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];	
  dates[10] = [new Date(2015, 9, 2), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];
  dates[11] = [new Date(2015, 9, 9), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];
  dates[12] = [new Date(2015, 9, 12), 1, "Interim Grades Available", "Wingspan"];	  
  dates[13] = [new Date(2015, 9, 16), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];
  dates[14] = [new Date(2015, 9, 19), 2, "Fall Break", "No Class"];
  dates[15] = [new Date(2015, 9, 20), 2, "Fall Break", "No Class"];
  dates[16] = [new Date(2015, 9, 22), 0, "Tutee Seminar", "Academic Success Center", "11am", "Dinkins Auditorium"];
  dates[17] = [new Date(2015, 9, 23), 0, "Tutee Seminar", "Academic Success Center", "2pm", "Dinkins Auditorium"];
  dates[18] = [new Date(2015, 9, 23), 1, "Last Day to Withdraw From a Full-Semester Course With an 'N'"];
  dates[19] = [new Date(2015, 9, 23), 1, "Last Day to Elect to S/U a Full-Semester Course"];
  dates[20] = [new Date(2015, 10, 4), 1, "Early Spring Registration Begins"];	  
  dates[21] = [new Date(2015, 10, 25), 2, "Thanksgiving Break", "No Class"];
  dates[22] = [new Date(2015, 10, 26), 2, "Thanksgiving Break", "No Class"];
  dates[23] = [new Date(2015, 10, 27), 2, "Thanksgiving Break", "No Class"];	  
  dates[24] = [new Date(2015, 11, 7), 0, "Last Class", "Fall Semester"];
  dates[25] = [new Date(2015, 11, 8), 0, "Study Day"];
  dates[26] = [new Date(2015, 11, 19), 0, "Undergraduate Commencement"];
  dates[27] = [new Date(2016, 0, 11), 1, "Spring Classes Begin"];
  dates[28] = [new Date(2016, 0, 15), 1, "Last Day to Drop/Add a Full Semester Course"];
  dates[29] = [new Date(2016, 0, 18), 2, "Martin Luther King, Jr. Holiday", "No Classes"];
  dates[30] = [new Date(2016, 1, 29), 1, "Interim Grades Available", "Wingspan"];
  dates[31] = [new Date(2016, 2, 9), 1, "Last Day to Withdraw From a Full-Semester Course With an 'N'"];
  dates[32] = [new Date(2016, 2, 9), 1, "Last Day to Elect to S/U a Full-Semester Course"];
  dates[33] = [new Date(2016, 2, 14), 2, "Spring Break", "No Class"];
  dates[34] = [new Date(2016, 2, 15), 2, "Spring Break", "No Class"];
  dates[35] = [new Date(2016, 2, 16), 2, "Spring Break", "No Class"];
  dates[36] = [new Date(2016, 2, 17), 2, "Spring Break", "No Class"];
  dates[37] = [new Date(2016, 2, 18), 2, "Spring Break", "No Class"];
  dates[38] = [new Date(2016, 3, 6), 1, "Early Fall Registration Begins"];
  dates[39] = [new Date(2016, 3, 25), 0, "Last Class", "Spring Semester"];
  dates[40] = [new Date(2016, 3, 26), 0, "Study Day"];
  dates[41] = [new Date(2016, 4, 7), 0, "Undergraduate Commencement"];
  
  var list = $("#date-list");
  list.html("");
  var today = new Date();
  
  //loop through the array and add the items to the #dat-list item
  for(var i=0; i < dates.length; i++)
  {
		dates[i][0].setHours(23);	
		if(dates[i][0] >= today)
		{
			var dateDisplay = (dates[i][0].getMonth() + 1) + "/" + dates[i][0].getDate() + "/" + dates[i][0].getFullYear();
			var dateDetails = "<p><strong>" + dates[i][2] + "</strong></p>";
			var dateClass = "normal-date";
			
			if(dates[i][1] == 1)
			{
				dateClass = "accademic-date";
			}
			else if(dates[i][1] == 2)
			{
				dateClass = "holiday-date";	
			}
			
			for(var j=3; j< dates[i].length; j++)
			{
				dateDetails += "<p>" + dates[i][j] + "</p>";
			}
			
			list.append("<li class='" + dateClass + "'><div class='cal-date'>" + dateDisplay + "</div><div class='cal-details'>" + dateDetails + "</div></li>");
		}
  }