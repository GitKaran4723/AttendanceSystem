# 📌 **Attendance Management System - Google Sheets Integration**  

This project is a **web-based attendance system** that allows teachers to take attendance easily and store it directly in **Google Sheets**. It provides a **responsive user interface** and dynamically updates attendance records **vertically** in a Google Sheet based on **Section & Subject**.

---

## 🚀 **Features**
✅ **Dynamic Student Loading** - Students are loaded based on the selected **Section**.  
✅ **Class Time & Topic Entry** - Records **class timing** and **topics covered**.  
✅ **Mark Attendance** - Checkboxes to mark students **Present (P) or Absent (A)**.  
✅ **"Select All as Present" Button** - Quickly mark all students as present.  
✅ **Google Sheets Integration** - Attendance data is sent and **stored vertically** in a **Google Sheet**.  
✅ **Responsive Design** - Works on **mobile, tablet, and desktop**.  

---

## 📁 **Project Structure**
```
/attendance-project
│── attendance.html  # Main HTML file (Frontend UI)
│── script.js        # JavaScript to handle UI interactions
│── Code.gs         # Google Apps Script (Backend to store data in Sheets)
│── README.md        # Project Documentation (You are reading this)
```

---

## 🛠️ **Setup & Deployment**
### **1️⃣ Google Sheet Setup**
1. **Create a Google Sheet** with the following structure **(VERTICAL Format)**:
   ```
   A Column → USN List
   1st Row  → Date | Topic Taught | Time | Attendance Data starts from Column D
   ```
2. **Create different sheets** inside the same file for each **Section & Subject** (e.g., `A_Maths`, `B_Physics`).

---

### **2️⃣ Google Apps Script Backend**
1. Open the **Google Sheet**.
2. Click **Extensions → Apps Script**.
3. **Delete default code** and **paste `Code.gs`** from this project.
4. Click **Deploy → New Deployment**.
5. Select **Type: Web App** → Set access to **"Anyone"**.
6. Click **Deploy** and **Authorize the script**.
7. Copy the **Web App URL**.

---

### **3️⃣ Web Frontend Setup**
1. Open `attendance.html` in a browser.
2. **Edit `attendance.html` → Replace `"YOUR_GOOGLE_APPS_SCRIPT_URL"`** with your actual **Google Apps Script URL**.
3. Save and run the file in **Chrome or any modern browser**.

---

## 🖥️ **Usage**
1. **Select a Section** - Automatically loads students.
2. **Select Subject** - Attendance data is saved in the corresponding sheet.
3. **Enter Class Timing & Topic** - Ensures records are complete.
4. **Mark Attendance**:
   - Check students manually OR
   - Click **"Select All as Present"** for bulk marking.
5. **Submit Attendance** - Click the **Submit** button.
6. ✅ **Data is updated in Google Sheets** in a **new column**.

---

## 📌 **Google Sheets Attendance Format**
| **A**       | **B**           | **C**       | **D**  | **E**  | **F**  |
|-------------|----------------|-------------|--------|--------|--------|
| **Date**    | **Topic Taught**| **Time**    | **USN1** | **USN2** | **USN3** |
| 2025-02-19  | Data Structures | 10:00-11:00 | P      | A      | P      |
|             |                |             | P      | P      | A      |

- **Each new class creates a new column**.
- **Students' attendance is stored under their USN**.

---

## 📌 **Future Enhancements**
- ✅ **Student Attendance History View**
- ✅ **Export Data to CSV/PDF**
- ✅ **Teacher Authentication System**
- ✅ **Automated Reports for Analysis**

---

## ❤️ **Contributing**
If you have ideas for improvement, feel free to **fork this repo and submit a PR**!  

📧 **Contact:** *your-email@example.com*  

Happy Coding! 🚀#   A t t e n d a n c e S y s t e m 
 
 
