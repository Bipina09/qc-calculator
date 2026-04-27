# Enhanced QC Calculator

A comprehensive Quality Control evaluation system designed to streamline and enhance the faculty evaluation process in educational institutions.

## 🎯 Features

### Core Functionality
- **Interactive Web Interface**: Modern, responsive design that works on all devices
- **11 Evaluation Criteria**: Based on the original QC form with enhanced descriptions
- **Weighted Scoring System**: Different criteria have different weights for more accurate assessment
- **Real-time Calculation**: Instant score updates as you rate each criterion
- **Visual Analytics**: Radar chart visualization of performance across all criteria

### Enhanced Features
- **Multi-shift Support**: Morning, Afternoon, and Evening shift options
- **Multiple Teaching Modes**: Online, Offline, and Hybrid mode support
- **Auto-save**: Automatically saves progress every 30 seconds
- **Data Persistence**: Save and load previous evaluations
- **Export Options**: PDF export and print functionality
- **Performance Grading**: Automatic grade calculation (A+ to F)
- **Performance Categories**: Outstanding, Excellent, Good, Satisfactory, etc.
- **Remarks System**: Add specific comments for each criterion
- **Evaluation History**: Track and review past evaluations

## 📊 Evaluation Criteria

1. **Preparation and Punctuality** (Weight: 1.0)
   - Faculty readiness and time management

2. **Content Delivery** (Weight: 1.2)
   - Clarity and organization of lesson presentation

3. **Student Engagement** (Weight: 1.2)
   - Active involvement and interest maintenance

4. **Classroom Management** (Weight: 1.1)
   - Discipline and positive learning environment

5. **Use of Teaching Aids/Tools** (Weight: 1.0)
   - Effective use of technology and resources

6. **Encourages Thinking** (Weight: 1.3)
   - Critical thinking and problem-solving promotion

7. **Feedback Mechanism** (Weight: 1.1)
   - Timely and constructive guidance

8. **Student Attentiveness and Responsiveness** (Weight: 1.0)
   - Student participation and attention levels

9. **Student Disciplinary** (Weight: 1.0)
   - Fair and consistent discipline strategies

10. **Professionalism & Ethics** (Weight: 1.2)
    - Professional behavior and ethical conduct

11. **Organization and Execution of Exposure Visits** (Weight: 1.0)
    - Planning and conducting educational visits

## 🎨 Rating System

- **1 - Poor**: Significant improvements needed
- **2 - Below Average**: Some improvements required
- **3 - Average**: Meets basic expectations
- **4 - Good**: Exceeds expectations
- **5 - Excellent**: Outstanding performance

## 📈 Grading Scale

| Percentage | Grade | Performance Level |
|------------|-------|-------------------|
| 90-100%    | A+    | Outstanding       |
| 85-89%     | A     | Excellent         |
| 80-84%     | B+    | Excellent         |
| 75-79%     | B     | Good              |
| 70-74%     | C+    | Good              |
| 65-69%     | C     | Satisfactory      |
| 60-64%     | D+    | Satisfactory      |
| 55-59%     | D     | Needs Improvement |
| Below 55%  | F     | Unsatisfactory    |

## � Performance Tracking & Progress Analysis 🆕

The new **Progress Chart & Analysis** feature helps you track QC performance over time and identify areas that need improvement.

### How to Use Progress Analytics

1. **Generate Progress Charts**
   - Scroll to "Progress Chart & Analysis" section
   - Click "Generate Progress Chart" button
   - Charts will automatically populate with your saved evaluation data

2. **Apply Filters** (Optional)
   - Select date range (From Date / To Date)
   - Filter by QC Type (Student, Instructor, Class, Resource, Visit, Showcase)
   - Filter by specific Faculty member
   - Click "Apply Filters" to update all charts

3. **View Analysis**
   - **Performance Trend Over Time**: Line chart showing your scores progressing over days/evaluations
   - **Areas Needing Improvement**: Horizontal bar chart showing which evaluation criteria need the most work
   - **Performance by Activity Type**: See how different types of activities (class, lab, assessment) are performing
   - **Week-by-Week Progress**: Track improvements across the course weeks
   - **Faculty/Subject Comparison**: Compare performance across different faculty members and subjects

4. **Read Insights**
   - **Key Insights**: Automatic analysis including:
     - Overall performance assessment
     - Trend direction (improving, declining, or stable)
     - Performance consistency analysis
     - Top priority areas for improvement
   - **Detailed Improvement Areas**: Ranked list of the top 10 areas needing improvement with specific scores

5. **Export Reports**
   - Click "Export Progress Report" to save as Excel file
   - Click "Export as PDF" for a professional report
   - Share reports with stakeholders or keep for records

### Key Metrics

- **Evaluations Tracked**: Total number of evaluations included in the analysis
- **Average Progress**: Overall average score across all selected evaluations
- **Best Score**: Highest individual evaluation score
- **Lowest Score**: Lowest individual evaluation score

### Understanding the Charts

**Performance Trend Chart:**
- Shows individual evaluation scores and average trend line
- Use to identify if performance is improving, declining, or stable

**Improvement Areas Chart:**
- Criteria sorted from lowest to highest score
- Red/orange indicate urgent improvement needed
- Green indicates strong performance

**Activity Type Chart:**
- Compares average performance across different activity types
- Helps identify if certain activities need more attention

**Weekly Progress Chart:**
- Shows average performance for each course week
- Identify which weeks had stronger or weaker performance

**Faculty Comparison Chart:**
- Compares performance across different faculty members/subjects
- Sorted from highest to lowest performance

### Smart Features

✅ **Automatic Trend Detection**: Identifies if scores are improving or declining
✅ **Consistency Analysis**: Highlights performance variability
✅ **Priority Ranking**: Automatically identifies top 5-10 areas needing focus
✅ **Date-based Filtering**: Track progress over specific time periods
✅ **Multi-dimensional Analysis**: View data by QC type, faculty, activity, and week
✅ **Professional Reports**: Export data for presentations or records

## 📈 🎯 Features

1. **Open the Application**
   - Open `index.html` in your web browser
   - No installation required - runs completely in the browser

2. **Fill Basic Information**
   - Date and time (auto-populated)
   - Select shift (Morning/Afternoon/Evening)
   - Enter subject/title, stream, mode, batch
   - Faculty name and QC conductor name

3. **Rate Each Criterion**
   - Click on the rating buttons (1-5) for each criterion
   - Add remarks if needed
   - Watch as the performance chart updates in real-time

4. **Calculate Results**
   - Results calculate automatically when all criteria are rated
   - View total score, percentage, grade, and performance level

5. **Save and Export**
   - Save evaluation to local history
   - Export as PDF for records
   - Print for physical documentation

## 💾 Data Management

### Auto-Save
- Automatically saves progress every 30 seconds
- Prompts to restore data from the same day on reload
- Prevents data loss during evaluation

### Evaluation History
- All saved evaluations are stored locally
- Click on any history item to reload that evaluation
- Sorted by most recent first
- Includes faculty name, date, and basic details

### Export Options
- **PDF Export**: Professional report with all details
- **Print**: Printer-friendly format
- **Local Storage**: Browser-based data persistence

## 🔧 Technical Features

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Adaptive layout for different screen sizes
- Touch-friendly interface for mobile use

### Performance Analytics
- Interactive radar chart using Chart.js
- Visual representation of strengths and weaknesses
- Easy identification of improvement areas

### Modern UI/UX
- Clean, professional interface
- Intuitive navigation and interaction
- Color-coded rating system
- Smooth animations and transitions

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Works offline once loaded

## 🛠️ Customization

### Adding New Criteria
1. Open `script.js`
2. Add new criteria to the `evaluationCriteria` array
3. Include id, title, description, and weight
4. The interface will automatically update

### Modifying Weights
- Adjust the `weight` property for any criterion
- Higher weights give more importance to that criterion
- Total score calculation adjusts automatically

### Changing Grade Scale
- Modify the `calculateGrade()` function in `script.js`
- Adjust percentage thresholds as needed
- Update the README documentation accordingly

## 📋 Best Practices

### For QC Conductors
1. Fill all basic information before starting evaluation
2. Review each criterion description carefully
3. Provide specific remarks for areas needing improvement
4. Save evaluation immediately after completion
5. Export PDF for institutional records

### For Administrators
1. Regularly backup evaluation data
2. Train QC conductors on the enhanced features
3. Review performance trends using the history feature
4. Use analytics for faculty development planning

## 🔐 Data Privacy

- All data is stored locally in the browser
- No data is sent to external servers
- Clear browser data to remove all evaluations
- Export important evaluations before clearing data

## 📞 Support

For technical issues or feature requests:
1. Check browser console for error messages
2. Ensure JavaScript is enabled
3. Try clearing browser cache and reloading
4. Contact system administrator for assistance

## 🆕 Version History

### Version 1.0 (Current)
- Initial release with all core features
- Responsive design implementation
- PDF export functionality
- Performance analytics
- Auto-save capability
- Evaluation history management

---

**Note**: This application runs entirely in the browser and doesn't require an internet connection once loaded. All data is stored locally on your device.